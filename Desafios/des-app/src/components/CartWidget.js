import './CartWidget.css';


import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function CartWidget() {
    const cartContext = useContext(CartContext);
    const {cartItems} = cartContext;

    return (
        <Link to="/cart">
        <div className='cart'>
        <div className='cart-icon'>
            <i className="large material-icons carti">local_grocery_store</i>
        </div>
        
        <div className='cart-number'>{cartItems.length}</div>
        </div>
        </Link>
    );
  }
  
  export default CartWidget;