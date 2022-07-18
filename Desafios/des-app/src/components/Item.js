import styles from "./Item.module.css";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function Item(item) {

  const {addItemToCart} = useContext(CartContext);

  const onAdd = (amount) => {
    addItemToCart(item, amount)
  }
 
  return (
    <div className={styles.card}>
      <Link to={`/item/${item.id}`}>
        <div className={styles.cardImage}>
          <img src={item.image} alt={item.name} />
        </div>
      </Link>
      <div className={styles.cardTitle}>{item.name}</div>
      <div className={styles.cardContent}>
        <p>Precio: ${item.precio}</p>
      </div>
      <div>
      <ItemCount item={item} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default Item;
