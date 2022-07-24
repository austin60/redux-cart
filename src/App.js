import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.json'
import React from 'react';
import Products from './components/card';
import Sort from './components/sort';
import Cart from './components/cart';



class App extends React.Component {
  state={
    products:data.products,
    size:"",
    sort:"",
    cartItem:[]
  }
  changeSize=(e)=>{
  if(e.target.value===" "){
    this.setState({
      products:data.products,
      size:""
      
    })
  }
  else{
    this.setState({size: e.target.value,
      products:data.products.filter(product=>product.availableSizes.indexOf(e.target.value)>=0)})
  }
  
  }
  changeSort=(e)=>{
    const sort=e.target.value;
    this.setState((state)=>({
      sort:sort,
      products:this.state.products.slice().sort((a,b)=>(
        sort==="lowest"?
        ((a.price<b.price)?1:-1):
        sort==="highest"?
        ((a.price<b.price)?1:-1):
        ((a._id<b._id)?1:-1)
      ))
    }))
   }
//handle cart items
   handleAddCart=(product)=>{
    const cartItem=this.state.cartItem.slice();
    let alreadyInCart=false;

  cartItem.forEach(item => {
    if(item._id===product._id){
      item.count++;
      alreadyInCart=true;
    }
  });

   if(!alreadyInCart){
    cartItem.push({...product,count:1})
   }
   this.setState({cartItem})
  }
  //delete items from cart
  handleCartDelete=(product)=>{
    const cartItem=this.state.cartItem.slice();
    this.setState({cartItem:cartItem.filter(cItem=>cItem._id!==product._id)})
    
  }
  
render(){
  return (
    <div className="App">
      <div className='main'>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
             <span className="navbar-brand mb-0 h1">Shop</span>
          </div>
        </nav>

        <div className='content'>
         <div className='product-section'>
          <Sort products={this.state.products}
                sort={this.state.sort}
                size={this.state.size}
                handleSize={this.changeSize}
                handleSort={this.changeSort}/>
          <Products products={this.state.products}
                    addToCart={this.handleAddCart}/>
         </div>
         <div className='right-section'>
  
         <Cart cartItem={this.state.cartItem}
               removeItem={this.handleCartDelete}/>
         </div>
       </div>
     </div>
  </div>

  );
 }

}

export default App;
