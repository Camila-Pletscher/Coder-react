import styles from "./Item.module.css";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import { CartContext, useCart } from "../context/CartContext";
import { useContext } from "react";

function Item({ id, product, categoria, image, precio }) {
  // Traemos la fx del context
  const {addItemToCart} = useContext(CartContext)

  return (
    <div className={styles.card}>
      <Link to={`/item/${id}`}>
        <div className={styles.cardImage}>
          <img src={image} alt={product} />
        </div>
      </Link>
      <div className={styles.cardTitle}>{product}</div>
      <div className={styles.cardContent}>
        <p>Precio: ${precio}</p>
      </div>
      <div> 
        <button onClick={() => addItemToCart(product)}>
          <i className="small material-icons">add_shopping_cart</i>
        </button>
      </div>
    </div>
  );
}

export default Item;
