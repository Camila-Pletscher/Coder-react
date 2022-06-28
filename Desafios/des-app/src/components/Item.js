import { useState } from "react";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
import Swal from "sweetalert2";

function Item({product, price, description}) {
  // const [ num, setNum ] = useState(0);

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card deep-purple lighten-3">
          <div className="card-content white-text">
            <span className="card-title">{ product }</span>
            <p>Precio: ${ price }</p>
            <p>{description} </p>
          </div>
          <div className="card-action">
            <a href="#" className="white-text">Ver detalle del servicio</a>
            <a href="#"><i className="material-icons white-text">add_shopping_cart</i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
