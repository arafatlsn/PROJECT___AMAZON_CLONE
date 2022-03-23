
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Products.css'
import  { setLocalStrg, loadDataStrg, removeStorage } from '../Local Storage/LocalStorage'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    const getDataStrg = loadDataStrg();
    setCart(getDataStrg)
  }, [cart])

  const addToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart)
    setLocalStrg(product)
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
      <Cart cart={cart} setCart={removeStorage}></Cart>
  </div>
  );
};

export default Products;