import styles from "./Detail.module.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Detail(service) {
  const { addItemToCart } = useContext(CartContext);

  const onAdd = (amount, setCount) => {
    addItemToCart(service, amount);
    setCount(true);
  };

  return (
    <>
      <div className={styles.contDetail} key={service.id}>
        <div className={styles.contInfo}>
          <div className={styles.title}>{service.name}</div>
          <div className={styles.descrip}>{service.descripcion}</div>
          <div className={styles.precio}>Inversión: ${service.precio}</div>
        </div>
        <div className={styles.contImage}>
          <img src={service.image} alt={service.name} />
          
          <div>
            <ItemCount item={service} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
