import styles from "./Item.module.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    
      
        <div className={styles.card}>
          <div className="card-content white-text">
            <Link to={`/services/${props.id}`}>
                <span className="card-title">{props.product}</span>
            </Link>
            <p>Precio: ${props.price}</p>
          </div>
          <div className="card-action">
            <p>Ver detalle del servicio</p>
            <i className="material-icons white-text">add_shopping_cart</i>
          </div>
        </div>
      
    
  );
}

export default Item;
