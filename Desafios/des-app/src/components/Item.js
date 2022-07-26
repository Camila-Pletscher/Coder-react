import styles from "./Item.module.css";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

function Item(item) {

  

  
 
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
      
    </div>
  );
}

export default Item;
