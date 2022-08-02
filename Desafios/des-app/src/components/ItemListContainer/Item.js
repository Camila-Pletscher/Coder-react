import styles from "./Item.module.css";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Item(item) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <Link to={`/item/${item.id}`}>
        <div className={styles.cardImage}>
          <img src={item.image} alt={item.name} />
        </div>
      </Link>
      <div className={styles.subtitulo}>
        <p>{item.subtitulo}</p>
      </div>
      <div className={styles.cardTitle}>
        <p>{item.name}</p>
      </div>
      <div className={styles.precio}>
        <p>${item.precio}</p>
      </div>
      <div className={styles.add}>
        <button onClick={() => addItemToCart(item)}>
          <div className={styles.addIcon}>
            <i class="material-icons">add_shopping_cart</i>
          </div>
          <div>Agregar al carrito</div>
        </button>
      </div>
    </div>
  );
}

export default Item;
