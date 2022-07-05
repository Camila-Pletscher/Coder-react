import ItemDetail from '../ItemDetail/ItemDetail';
import styles from './ItemDetailContainer.module.css'

function ItemDetailContainer(props){
    return (
        <div className={styles.container}>
            {props.services.map ((service) => (
                <ItemDetail 
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

export default ItemDetailContainer;
