
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Products.css'
import  { setLocalStrg, loadDataStrg, removeStorage } from '../Local Storage/LocalStorage'
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';

const Products = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();
  
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
      <Cart cart={cart} setCart={removeStorage}>Order Review</Cart>
  </div>
  );
};

export default Products;