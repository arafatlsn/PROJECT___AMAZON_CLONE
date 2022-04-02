import useCart from '../../Hooks/useCart'
import Cart from '../Cart/Cart';
import OrderCarts from '../OrderReviewCarts/OrderCarts';
import {removeStorage, removeItem} from '../Local Storage/LocalStorage'
const OrderReview = () => {
  const [cart, setCart] = useCart()
  return (
    <div className='grid grid-cols-12'>
      <div className='col-start-1 col-end-10 py-20'>
        {
        cart.map(elCart => <OrderCarts key = {elCart.id} elCart = {elCart} setCart = {setCart} removeItem = {removeItem}></OrderCarts>)
        }
      </div>
      <div className='col-start-10 col-end-13' style={{background: '#FFE0B3'}}>
        <Cart cart={cart} setCart = {removeStorage}>Checkout</Cart>
      </div>
    </div>
  );
};

export default OrderReview;