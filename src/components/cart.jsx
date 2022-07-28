import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import Fade from 'react-reveal/Fade'

class Cart extends React.Component{
    state={
        showCheckout:false,
        name:"",
        phone:"",
        email:""
    }
    handleInput=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
    createOrder=(e)=>{
        e.preventDefault()
        const order={
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email,
            cartItem:this.props.cartItem
        };
        this.props.createOrder(order);
    }
    render(){
        return(
            <div>
             <nav className="navbar navbar-light bg-secondary">
              <div className="container-fluid">
              {this.props.cartItem.length===0?
                <span className="navbar-brand mb-0 h1">No items in cart</span>
              :
                <span className="navbar-brand mb-0 h1">{this.props.cartItem.length} items in cart</span>
              }
          </div>
        </nav>
        <div className="cart-items">
            <Fade left cascade>
            <ul>
                {this.props.cartItem.map(item=>(
                    <div className="item" key={item._id}>
                        <div className="item-image">
                            <img src={item.image} alt="img" />
                        </div>
                        <div className="item-details">
                            <div className="item-title">{item.title}</div>
                            <div className="item-price">${item.price}x{item.count}</div>
                        </div>
                        <div className="item-detail">
                            <button className="btn btn-warning" onClick={()=>this.props.removeItem(item)}><MdRemoveShoppingCart/></button>
                        </div>
                        
                    </div>
                ))}
            </ul>
            </Fade>
        </div>
        {this.props.cartItem.length!==0 && (
            <div>
            <div className="item-total">
           <b>Total:${" "}{this.props.cartItem.reduce((a,c)=>{
                return a+(c.price*c.count)
               },0)}</b>
            <div className="proceed">
                <button className="btn btn-warning" onClick={()=>{this.setState({showCheckout:true})}}>
                    Proceed
                </button>
            </div>
        </div>
        {this.state.showCheckout && (
            <Fade right cascade>
            <div className="checkout-form">
              <form className="form-control" onSubmit={this.createOrder}>
              <label>name</label>{" "}
                <input type="text" name="name" required onChange={this.handleInput}/><br/>
              <label>phone </label>{" "}
                <input type="text" name="phone" required onChange={this.handleInput}/><br/>
              <label>e-mail </label>{" "}
                <input type="email" name="email" required  onChange={this.handleInput}/><br/>
              <button className="btn btn-warning" type="submit" >checkout</button>
              </form>
            </div>
            </Fade>
        
        )}
        </div>
        )}
     </div>
        )
    }
}
export default Cart;