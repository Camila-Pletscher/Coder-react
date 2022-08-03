

import "materialize-css/dist/css/materialize.min.css";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function ItemDetailContainer() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {iditem} = useParams();

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(
  //       ()=>
  //       fetch("../data/data.json")
  //       .then((resp) => resp.json())
  //       .then((data) => {setServices(data.filter(i => i.id === iditem))})
  //       .finally (() => setIsLoading(false))
  //       ,2000);
  // }, [])

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
        const db = getFirestore();

    const q = query (collection(db, "services"), where ("id", "==", iditem))

    getDocs(q).then((snapshot) => {
        
            setServices(snapshot.docs.map((doc) => doc.data()))
    })
    .finally(() => setIsLoading(false))
    }, 2000)
    
}, [iditem])

  return (
    isLoading ? (
      <div className="progress">
          <div className="indeterminate"></div>
      </div>
  ) :
  (<ItemDetail services={services} />)
  );
}

export default ItemDetailContainer;
