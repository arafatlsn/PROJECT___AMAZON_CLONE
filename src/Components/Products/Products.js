
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Products.css'
import  { setLocalStrg, loadDataStrg } from '../Local Storage/LocalStorage'

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
  }, [])

  const addToCart = product => {
    const newCart = [...cart, product];
    console.log(newCart)
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
      <Cart cart={cart} setCart={setCart}></Cart>
  </div>
  );
};

export default Products;