import ItemCount from './ItemCount';
import styles from './Detail.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Detail({id,product,categoria,image,precio,descripcion,stock}) {
  

  return (
    <>
    <div className={styles.contDetail} key={id}>
      <div className={styles.contInfo}>
        <div className={styles.title}>{product}</div>
        <div className={styles.descrip}>{descripcion}</div>
        <div className={styles.precio}>Inversión: ${precio}</div>
      </div>
      <div className={styles.contImage}>
        <img src={image} alt={product} />
        
        <ItemCount stock={stock} product={product} id={id} />
        <Link to="/carrito">
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
