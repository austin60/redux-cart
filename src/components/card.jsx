import React from 'react';
const Card=(props)=>{
    let {products}=props;
    //const {_id,title,description,}=products[0];
    //console.log(_id)
  return(
    (products && products !== " ")?(
        products.map(product=>{
           const {_id,title,image,price}=product;
    return(
          <div className='card' key={_id}>    
            <div className="product-image">
              <img src={image} alt={title} />
            </div>
            <div className="details">
              <div className="title">{title}</div>
              <div className="price">${price}</div>
            </div>
          </div>
    )
       
        }
        )
    ):(<h2>...loading</h2>)
    
  )  
}
export default Card;
