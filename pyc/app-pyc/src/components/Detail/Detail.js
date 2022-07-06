import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(props) {



  return (
    <div className={styles.contDetail}>
      <div className="row">
        <div className="col s6">
          <img src='' alt={props.product} />
        </div>
        <div className="col s6 name">
          <p>{props.product}</p>
          <p>Precio: ${props.price}</p>
        </div>
        <div className="col s12">
          <p className="center">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
