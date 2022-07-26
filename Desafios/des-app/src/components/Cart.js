import styles from "./Cart.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import FinCompra from "./FinCompra";

function Cart() {
  const { deleteCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const [vaciar, setVaciar] = useState(false);

  if (cartItems.length < 1) {
    console.log(cartItems.length);
  }

  

  return (
    
    vaciar || cartItems.length < 1 ? (<p>No hay productos en el carrito</p>) : (<div>
        {cartItems?.map((item) => (
          <ItemCart {...item} key={item.id} />
        ))}
        <div onClick={() => setVaciar(true)} className={styles.contDelete}>
        <div className={styles.delete} onClick={deleteCart}>
          <div className={styles.icon}>
            <i class="material-icons">delete_forever</i>
          </div>
          <div className={styles.vaciar}>Vaciar</div>
        </div> 
      </div>
      <FinCompra/>
      </div>)

      
      
    
  );
}

export default Cart;
