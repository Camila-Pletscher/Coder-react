import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styles from './BannerCat.module.css'

function BannerCat({idcategoria}) {

    const [banner, setBanner] = useState();

    useEffect(() => {
        
       
          const db = getFirestore();

          const q = query(
            collection(db, "banners"),
            where("categoria", "==", idcategoria)
          );
          getDocs(q)
            .then((snapshot) => {
              setBanner(snapshot.docs.map((doc) => doc.data()));
            })
    
          
        
      }, [idcategoria]);

      

    return (
        
        <div className={styles.contenedor}>
            {banner?.map((item) => (
                <>
                <div className={styles.contInfo}>
                <div className={styles.contTitulo}>
                    <p>{item.titulo}</p>
                </div>
                <div className={styles.contDescripcion}>
                    <p>{item.descripcion}</p>
                </div>
            </div>
            <div className={styles.contImage}>
                <img src={item.imagen} alt={item.titulo} />
            </div>
            </>
            ))}
        </div>
        
    )
}

export default BannerCat;