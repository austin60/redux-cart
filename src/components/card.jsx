import React from 'react'

class Products extends React.Component{
  render(){
    return(
      <div className='products'>
        {this.props.products.map(product=>(
          
          <div className="product" key={product._id}>
             <div className="image">
               <img src={product.image} alt={product.title} />
            </div>
            <div className="product-content">
              <div className="title"> {product.title}</div>
              <div className="price">${product.price}</div>
              <button className='btn btn-secondary' onClick={()=>this.props.addToCart(product)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default Products;