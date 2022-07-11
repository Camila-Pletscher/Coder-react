import ItemCount from './ItemCount';
import styles from './Detail.module.css'


function Detail({id,nombre,categoria,image,precio,descripcion,stock}) {
  

  return (
    <>
    <div className={styles.contDetail} key={id}>
      <div className={styles.contInfo}>
        <div className={styles.title}>{nombre}</div>
        <div className={styles.descrip}>{descripcion}</div>
        <div className={styles.precio}>Inversión: ${precio}</div>
      </div>
      <div className={styles.contImage}>
        <img src={image} alt={nombre} />
        <ItemCount stock={stock} />
      </div>
      
      
    </div>
    
    </>
  );
}

export default Detail;
