import { useContext, useState } from "react";
import styles from "./ItemCount.module.css";
import "materialize-css/dist/css/materialize.min.css";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ItemCount({ item }) {
  const { addAmountToCart } = useContext(CartContext);

  const [count, setCount] = useState(false);

  const [amount, setAmount] = useState(1);

  const sumar = () => {
    setAmount(amount + 1);
  };

  const restar = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return count ? (
    <>
    <div className={styles.contAmountSeleccionada}>
      <p>Cantidad seleccionada: {amount}</p>
      </div>
      <div className={styles.buttons}>
      <Link to="/cart">
        <div className={styles.end}>
        <button onClick={() => addAmountToCart(item, amount, setCount)}>
          <div className={styles.endIcon}>
            <i class="material-icons">shopping_cart</i>
          </div>
          <div>Ver el carrito</div>
        </button>
        </div>
      </Link>
      <Link to="/services">
        <div className={styles.end}>
        <button>
          <div className={styles.endIcon}>
            <i class="material-icons">shopping_cart</i>
          </div>
          <div>Seguir comprando</div>
        </button>
        </div>
      </Link>
      </div>
    </>
  ) : (
    <div className={styles.contCount}>
      <div className={styles.contButton}>
        <div className={styles.contAmount}>
          <p>{amount}</p>
        </div>
        <div className={styles.contContador}>
          <div className={styles.circle}>
            <button onClick={sumar}>
              <i className="material-icons">arrow_drop_up</i>
            </button>
          </div>
          <div className={styles.circle}>
            <button onClick={restar}>
              <i className="material-icons">arrow_drop_down</i>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.add}>
        <button onClick={() => addAmountToCart(item, amount, setCount)}>
          <div className={styles.addIcon}>
            <i class="material-icons">add_shopping_cart</i>
          </div>
          <div>Agregar al carrito</div>
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
