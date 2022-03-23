import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({products, cartFunction}) => {
  // {products, cartFunction}
  const {img, name, price, seller, ratings, quantity} = products;
  return (
    <div className='card-items-parent border'>
      <div className='card-items-div p-1'>
        <div className='img-div d-flex justify-content-center align-content-center'>
          <img src={img} className='rounded'></img>
        </div>
        <div>
          <div className='mt-1'>
            <h6 className='m-0 fw-bold'>
              {name.length > 25 ? name.slice(0, 25) + '...' : name}
            </h6>
            <p className='m-0 fw-bold'>
              Price: {price}
            </p>
          </div>
          <div className='mt-3'>
            <p className='m-0'>Manufactured: {seller}</p>
            <p className='m-0'>Rating: {ratings}</p>
          </div>
        </div>
      </div>
      <div onClick={() => cartFunction(products)} className='py-2 add-to-cart'>
        <h6 className='text-center'>
          Add To Cart <FontAwesomeIcon icon={faCartPlus} />
        </h6>
      </div>
    </div>
  );
};

export default Product;