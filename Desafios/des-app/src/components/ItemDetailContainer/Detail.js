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
            <div>
              <div>
                <p>{service.name}</p>
              </div>
              <div>
                <p>{service.subtitulo}</p>
              </div>
              <div>
                <p>{service.precio}</p>
              </div>
            </div>
            <div>line</div>
            <div>
              <p>{service.descripcion}</p>
            </div>

            <div>
              <ItemCount item={service} onAdd={onAdd} />
            </div>

            <div>Categoria:{service.categoria}</div>
          </div>
        </div>
        <div className={styles.contDescripcionFin}>
          <div>
            <p>descripcion</p>
          </div>
          <div>
            <p>{service.descripcion}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
