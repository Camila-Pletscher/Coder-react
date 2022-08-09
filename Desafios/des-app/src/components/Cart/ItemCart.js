import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCart.module.css";

function ItemCart(item) {
  const { deleteItemToCart, addItemToCart, deleteItemTotalToCart } =
    useContext(CartContext);

  return (
    <div className={styles.contGeneralLine} >
    <div className={styles.contGeneral}>
      <div className={styles.contInfo}>
        <div className={styles.contImage}>
          <img src={item.image} alt={item.name} />
        </div>
        <div className={styles.contInfo2}>
          <div className={styles.name}>
            <p>{item.name}</p>
          </div>
          <div className={styles.contAmount}>
            <p>Cantidad: {item.amount}</p>
            <div className={styles.buttons}>
              <button onClick={() => addItemToCart(item)}>+</button>
            </div>
            <div className={styles.buttons}>
              <button onClick={() => deleteItemToCart(item)}>-</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.contTotal}>
        <div className={styles.amount}>
          <p>${item.precio * item.amount}</p>
        </div>
        <div className={styles.deleteItem} onClick={() => deleteItemTotalToCart(item)}>
          <button className={styles.remove}>
          <i class="material-icons">delete_sweep</i>
          </button>
          
        </div>
      </div>
    </div>
    <div className={styles.line}></div>
    </div>
  );
}

export default ItemCart;