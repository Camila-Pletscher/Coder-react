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
        
            <i className="small material-icons carti">local_grocery_store {cartItems.length}</i>
    
       
        </div>
        </Link>
    );
  }
  
  export default CartWidget;