import React from 'react';
import { BsTrashFill } from 'react-icons/bs'

const OrderCarts = props => {
  const {name, img, price, shipping, quantity} = props.elCart;
  const {removeItem} = props
  return (
    <div className='mx-auto grid grid-cols-12 items-center my-2 border rounded-lg' style={{width: '571px'}}>
      <div className='col-start-1 col-end-11'>
        <div className='flex'>
          <div>
            <img style={{width: '100px'}} className='m-0 object-cover' src={img} alt="product" />
          </div>
          <div className='ms-1'>
            <h5 className='text-nowrap m-0'>{name.length > 30 ? name.slice(0, 20) + '...' : name}</h5>
            <h6 className=' m-0'>Price: $<span className='text-red-400'>{price}</span></h6>
            <h6 className=' m-0'>Shipping Charge: $<span className='text-red-400'>{shipping}</span></h6>
          </div>
        </div>
      </div>
      
      <div className='col-start-11 col-end-13 justify-self-center cursor-pointer'>
          <p onClick={() => removeItem(name)} className='m-0 text-xl text-red-500 bg-red-100 p-2 rounded-3xl'><BsTrashFill/></p>
      </div>
    </div>
  );
};

export default OrderCarts;