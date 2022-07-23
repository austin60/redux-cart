import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.json'
import React from 'react';
import Products from './components/card';
import Sort from './components/sort';



class App extends React.Component {
  state={
    products:data.products,
    size:"",
    sort:""
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
    this.setState ({sort:e.target.value})
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
          <Products products={this.state.products}/>
         </div>
         <div className='right-section'></div>
       </div>
     </div>
  </div>

  );
 }

}

export default App;
