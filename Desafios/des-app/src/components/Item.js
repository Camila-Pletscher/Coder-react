// import { useState } from "react";
import "./Item.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

function Item({id,nombre,categoria,image,precio}) {
  

  return (
    <div>
      <Link to={`/item/${id}`}>
        <span>{nombre}</span>
      </Link>
      <span>Cat: {categoria}</span>
      <span>
        <img src={image} alt={nombre} />
      </span>
      <span>Precio: ${precio}</span>
    </div>
    
  );
}

export default Item;
