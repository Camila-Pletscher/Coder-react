import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Home/Banner";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import BannerCat from "./BannerCat";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { idcategoria } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const db = getFirestore();

      if (idcategoria) {
        const q = query(
          collection(db, "services"),
          where("categoria", "==", idcategoria)
        );
        getDocs(q)
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => doc.data()));
          })
          .finally(() => setIsLoading(false));
      } else {
        const dataIt = collection(db, "services");

        getDocs(dataIt)
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => doc.data()));
          })
          .finally(() => setIsLoading(false));
      }
    }, 2000);
  }, [idcategoria]);

  return isLoading ? (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  ) : idcategoria ? (
    <>
      <BannerCat idcategoria={idcategoria}/>
      <div className="contItemList">
        <ItemList items={items} />
      </div>
    </>
    
  ) : (
    <>
      <Banner></Banner>
      <div className="contItemList">
        <ItemList items={items} />
      </div>
    </>
  );
}

export default ItemListContainer;
