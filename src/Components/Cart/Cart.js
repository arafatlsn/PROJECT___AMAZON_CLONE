import React from 'react';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({cart, setCart}) => {
  return (
    <div className='cart-side'>
      <h4 className='text-center mt-4'>
              Order Summary
            </h4>
        <div className='w-75 mx-auto my-5'>
          <div>
            <p>Selected Items: {!cart.length ? 0 : cart.length}</p>
            <p>Total Price: <span>$</span>{!cart.reduce((previous, current) => previous + current.price, 0) ? 0 : cart.reduce((previous, current) => previous + current.price, 0)}</p>
            <p>Total Shipping Charge: <span>$</span>{cart.length * 20}</p>
            <p>Tax: <span>$</span>{!(cart.reduce((previous, current) => previous + current.price, 0) * .2).toFixed(2) ? 0 : (cart.reduce((previous, current) => previous + current.price, 0) * .2).toFixed(2)}</p>
            <h5>Grand Total: <span>$</span>{(!cart.reduce((previous, current) => previous + current.price, 0) ? 0 : cart.reduce((previous, current) => previous + current.price, 0)) + cart.length * 20 + (!(cart.reduce((previous, current) => previous + current.price, 0) * .2).toFixed(2) ? 0 : (cart.reduce((previous, current) => previous + current.price, 0) * .2))}</h5>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <button onClick={() => setCart([])} className='cart-btn rounded my-1 py-1'>Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
          <button className='review-btn rounded my-1 py-1'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>
  );
};

export default Cart;