import styles from './ItemList.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import Item from '../Item/Item';

function ItemList(props) {
    return(
        <div className={styles.cards}>
            {props.services.map ((service) => (
                <Item
                key={service.id}
                
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

export default ItemList;