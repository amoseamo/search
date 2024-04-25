import React from 'react';
import {useLocation,Link,useNavigate} from  'react-router-dom';

function Product (){
  const handle=()=>{
    navigate("/")
  }
  const navigate=useNavigate()
  const location=useLocation()
  const product=localStorage.getItem("product")?JSON.parse(localStorage.getItem("product")):[]
  product.push(location.state)
  localStorage.setItem('product',JSON.stringify(product))
    return(
        <div className='back-image product-page'>
                <h1>Product Details</h1>
                <div className='product-card'>
                  <h3>Wear Name: <span>{location.state.name}</span></h3>
                  <h3>Brand Name: <span>{location.state.brand}</span></h3>
                  <h3>Price: <span>{location.state.price}</span></h3>
                  <h3>Quantity: <span>{location.state.quantity}</span></h3>
                  <h3>Description: <span>{location.state.description}</span></h3>
                </div>
                <button onClick={handle}>Logout</button>
                <Link to='/dashboard'>Dashboard</Link>
        </div>
      );
}
export default Product;