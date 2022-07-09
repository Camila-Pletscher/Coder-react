

import "materialize-css/dist/css/materialize.min.css";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [services, setServices] = useState([]);
  const {iditem} = useParams();

  console.log(iditem);

  useEffect(() => {
    setTimeout(
        ()=>
        fetch("../data/data.json")
        .then((resp) => resp.json())
        .then((data) => {setServices(data.filter(i => i.id === iditem))})
        ,2000);
  }, [])

  return (
    <div className="cont-img container-fluid center">
      <ItemDetail services={services} />
    </div>
  );
}

export default ItemDetailContainer;
