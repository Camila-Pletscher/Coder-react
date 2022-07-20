import styles from './Detail.module.css'
import { Link } from 'react-router-dom';


function Detail(service) {

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
        <Link to="/cart">
        <div className={styles.contEndButton}>
        <button className={styles.endButton}>Finalizar compra</button>
        </div>
        </Link>
      </div>
      
    </div>
    
    </>
  );
}

export default Detail;
