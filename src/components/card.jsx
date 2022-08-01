import React from 'react'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal'
import  Zoom  from 'react-reveal/Zoom';
import { HiShoppingCart } from "react-icons/hi";
import { connect } from 'react-redux';
import { fetchProducts } from './redux/productAction';


class Products extends React.Component{
  state={
    product:null
  }
  componentDidMount(){
    this.props.fetchProducts()
  }
  openModal=(product)=>{
    this.setState({product})
  }
  closeModal=()=>{
    this.setState({product:null})
  }
  render(){
   const{product}=this.state;
    return(
      <div className='products'>
        <Fade bottom cascade>
          {!this.props.products?(<div>Loading...</div> ):(
            <div className='products'>
             {this.props.products.map(product=>(
              <div className="product" key={product._id}>
              <div className="image">
               <a href={"#"+product._id} onClick={()=>this.openModal(product)}>
                 <img src={product.image} alt={product.title} />
              </a>
              </div>
              
              <div className="product-content">
                <div className="title"> {product.title}</div>
              
                <div className="price">${product.price}</div>
                <button className='btn btn-secondary' onClick={()=>this.props.addToCart(product)}>Add</button>
              </div>
            </div>
          ))}
          </div>
          )}
      
        </Fade>
        {
          this.state.product && 
            <Modal isOpen={true}>
              <Zoom >
                  <div className='zoom'>
                     <div className='modal-button'>
                      <button className='btn btn-secondary'  onClick={this.closeModal}>X</button>
                     </div>
                     <div className='modal-data'>
                       <div className='modal-image'>
                         <img src={product.image} alt={product.title} />
                       </div>
                       <div className='modal-ps'>
                           <p><strong> {product.title}</strong></p>
                           <p>{product.description}</p>
                         
                           <p>Available :{product.availableSizes.map(x=>(
                             <span>{" "}<button className='btn btn-secondary'>{x}</button></span>
                             ))}</p>
                            <button className='btn btn-warning'onClick={()=>this.props.addToCart(product)}> Add To Cart <HiShoppingCart/></button>
                       </div>
                    </div>
                 </div> 
              </Zoom> 
            </Modal>
          
        }
      </div>
    )
  }
}
export default connect(state=>({products:state.products.items}),{fetchProducts})( Products);