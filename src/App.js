import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.json'
import Card from './components/card';
import { useState } from 'react';

function App() {
 const[state]=useState({data});
 const products=state.data
//console.log(products)
 //const {_id,title,price}=product[0];
 //console.log(_id);=dress1
  return (
    <div className="App">
     <div className='container-fluid'>
       <nav className="navbar navbar-light bg-light">
           <div className="container-fluid">
              <span>Thrift Store</span>
           </div>
       </nav>

       <div className='main'>
        <div className='main-products'>
          <Card products={products}/>
        </div>
        <div className='side-bar'></div>
       </div>

       <div className='footer'>all rights reserved</div>
     </div>
    </div>
  );
}

export default App;
