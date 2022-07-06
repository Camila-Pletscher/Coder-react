import styles from "./Item.module.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    
      
        <div className={styles.card}>
          <div className="card-content white-text">
            <div className={styles.image}>
              <img src={props.img} alt={props.product} />
            
            
                <span className="card-title">{props.product}</span>
            
            </div>
            <p>Precio: ${props.price}</p>
          </div>
          <div className="card-action">
            <Link to={`/service/${props.id}`}>
            <p>Ver detalle del servicio</p>
            </Link>
            <i className="material-icons white-text">add_shopping_cart</i>
          </div>
        </div>
      
    
  );
}

export default Item;
