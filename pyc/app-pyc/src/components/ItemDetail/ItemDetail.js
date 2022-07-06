import Detail from '../Detail/Detail';
import styles from './ItemDetail.module.css'

function ItemDetail(props){
    return (
        <div className={styles.container}>
            {props.services.map ((service) => (
                <Detail 
                    product={service.nombre}
                    price={service.precio}
                    subtitle={service.subtitulo}
                    img={service.image}
                    id={service.id}
                />
            ))}
        </div>
    )
}

export default ItemDetail;
