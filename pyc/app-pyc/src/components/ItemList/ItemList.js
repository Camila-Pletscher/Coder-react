import styles from './ItemList.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import Item from '../Item/Item';

function ItemList(props) {
    
    return(
        <div className={styles.cards}>
            {props.services.map ((service) => (
                <Item
                    product={service.nombre}
                    price={service.precio}
                    subtitle={service.subtitulo}
                    img={service.image}
                    id={service.id}
                    category={service.categoria}
                />
            ))}
        </div>
    )
}

export default ItemList;