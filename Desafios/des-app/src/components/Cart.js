import styles from './Cart.module.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

function Cart () {
    const {deleteCart} = useContext(CartContext);
    const {cartItems} =useContext(CartContext);
    
    return(
        <>
           
        <div>
            {cartItems?.map ((item) => (
                
                <ItemCart 
                    {...item} key={item.id}
                />
            ))}
        </div>
        <div className={styles.contDelete}>
            <div className={styles.delete} onClick={deleteCart}>
                    <div className={styles.icon}>
                        <i class="material-icons">delete_forever</i>
                    </div>
                    <div className={styles.vaciar}>
                        Vaciar
                    </div>
            </div>
        </div>
        </>
    )
}

export default Cart;