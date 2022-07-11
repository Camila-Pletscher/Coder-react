

import "materialize-css/dist/css/materialize.min.css";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {iditem} = useParams();

  console.log(iditem);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(
        ()=>
        fetch("../data/data.json")
        .then((resp) => resp.json())
        .then((data) => {setServices(data.filter(i => i.id === iditem))})
        .finally (() => setIsLoading(false))
        ,2000);
  }, [])

  return (
    isLoading ? (
      <div className="progress">
          <div className="indeterminate"></div>
      </div>
  ) :
  (<div className="cont-img"><ItemDetail services={services} /></div>)
  );
}

export default ItemDetailContainer;
