import styles from "./Item.module.css";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

function Item({ id, nombre, categoria, image, precio }) {
  return (
    <div className={styles.card}>
      <Link to={`/item/${id}`}>
        <div className={styles.cardImage}>
          <img src={image} alt={nombre} />
        </div>
      </Link>
      <div className={styles.cardTitle}>{nombre}</div>
      <div className={styles.cardContent}>
        <p>Precio: ${precio}</p>
      </div>
      <div> <i className="small material-icons">add_shopping_cart</i></div>
    </div>
  );
}

export default Item;
