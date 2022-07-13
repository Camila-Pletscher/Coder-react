import styles from "./Item.module.css";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Item({ id, nombre, categoria, image, precio }) {
  const cart = useCart();

  console.log(cart);

  const addNewProduct = () => {
    cart.addItem({id: {id}, name: {nombre}, price: {precio} })
  }


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
      <div> 
        <button onClick={addNewProduct}>
          <i className="small material-icons">add_shopping_cart</i>
        </button>
      </div>
    </div>
  );
}

export default Item;
