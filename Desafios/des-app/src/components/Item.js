// import { useState } from "react";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
// import Swal from "sweetalert2";

function Item(props) {
  // const [ num, setNum ] = useState(0);

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card deep-purple lighten-3">
          <div className="card-content white-text">
            <span className="card-title">{ props.product }</span>
            <p>Precio: ${ props.price }</p>
          </div>
          <div className="card-action">
            <p>Ver detalle del servicio</p>
            <i className="material-icons white-text">add_shopping_cart</i>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Item;
