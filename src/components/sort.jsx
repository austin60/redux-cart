import React from 'react';

class Sort extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <div>
               <i> {this.props.products.length} products found</i>
            </div>
            <div>
            <label htmlFor="size">Size:</label>
                 <select name="size" id="size" value={this.props.size} onChange={this.props.handleSize}>
                   <option value="">ALL</option> 
                   <option value="SM">XS</option> 
                   <option value="SM">S</option>
                   <option value="M">M</option>
                   <option value="L">L</option>
                   <option value="XL">XL</option>
                   <option value="XXL">XL</option>
                 </select>
            </div>
            <div>
            <label htmlFor="sort">Sort:</label>
                 <select name="sort" id="sort" value={this.props.sort} onChange={this.props.handleSort}>
                   <option value="Lowest">Lowest</option>
                   <option value="Highest">Highest</option>
                 </select>
            </div>
            </div>
          </nav>
        )
    }
}
export default Sort;