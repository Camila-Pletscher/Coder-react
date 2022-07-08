
import Detail from "../Detail/Detail";
import styles from "./ItemDetail.module.css";

function ItemDetail({producto}) {

  return (
    <div className={styles.contDetail}>
      
      {
        producto.map(pr => {
          return(
            <Detail 
            key={pr.id}

              product={pr.nombre}
              price={pr.precio}
              img={pr.image}
              id={pr.id}
              subtitle={pr.subtitulo}
            />
          )
        })
      }
    </div>
  );
}

export default ItemDetail;
