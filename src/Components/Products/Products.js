import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const addToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart)
    console.log(cart)
  }


  return (
    <div className='products-container'>
        <div className='card-parent-div'>
        {
          products.map(product => <Product 
            key={product.id} 
            products={product}
            cartFunction = {addToCart}
            ></Product>)
        }
      </div>

      <div className='cart-side'>
        <h4 className='text-center mt-4'>
              Order Summary
            </h4>
        <div className='w-75 mx-auto my-5'>
          <div>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: <span>$</span>{cart.reduce((previous, current) => previous + current.price, 0)}</p>
            <p>Total Shipping Charge: <span>$</span>{cart.length * 20}</p>
            <p>Tax: <span>$</span>{(cart.reduce((previous, current) => previous + current.price, 0) * .2).toFixed(2)}</p>
            <h5>Grand Total: <span>$</span>{(cart.reduce((previous, current) => previous + current.price, 0)) + (cart.reduce((previous, current) => previous + current.price, 0) * .2)}</h5>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <button onClick={() => setCart([])} className='cart-btn rounded my-1 py-1'>Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
          <button className='review-btn rounded my-1 py-1'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
  </div>
  );
};

export default Products;