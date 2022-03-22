
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
      <Cart cart={cart} setCart={setCart}></Cart>
  </div>
  );
};

export default Products;