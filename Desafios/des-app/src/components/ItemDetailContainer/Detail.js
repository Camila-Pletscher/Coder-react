import styles from "./Detail.module.css";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Detail(service) {
  const { addItemToCart } = useContext(CartContext);

  const onAdd = (amount, setCount) => {
    addItemToCart(service, amount);
    setCount(true);
  };

  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.contGeneral}>
          <div className={styles.contImage}>
            <img src={service.image} alt={service.name} />
          </div>
          <div className={styles.contInfo}>
            <div className={styles.contSubInfo}>
              <div className={styles.contName}>
                <p>{service.name}</p>
              </div>
              <div className={styles.contSubtitulo}>
                <p>{service.subtitulo}</p>
              </div>
              <div className={styles.contPrecio}>
                <p>${service.precio}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.contDescripcion}>
              <p>{service.contiene}</p>
            </div>

            <div>
              <ItemCount item={service} onAdd={onAdd} />
            </div>

          </div>
        </div>
        <div className={styles.contDescripcionFin}>
          <div className={styles.contDescripTit}>
            <p>Descripción</p>
          </div>
          <div className={styles.contDescripTxt}>
            <p>{service.descripcion}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
