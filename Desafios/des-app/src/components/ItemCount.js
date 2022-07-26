import { useContext, useState } from 'react';
import styles from './ItemCount.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';

function ItemCount({item, onAdd}) {

    const [count, setCount] = useState(false);

    const [amount, setAmount ] = useState(1);

    const sumar = () => {

            setAmount (amount + 1)
        
    }

    const restar = () => {
        if(amount > 1){
            setAmount (amount - 1)
        }
        
    }

    return (
        count ? (<p>Cantidad seleccionada: {amount}</p>) : (
            <div className={styles.contCount}>
                <div className={styles.contButton}>
                    <div className={styles.circle}>
                        <button onClick={ sumar }><i className="material-icons">add</i></button>
                    </div>
                    <div>
                        <p>{amount}</p>
                    </div>
                    <div className={styles.circle}>
                        <button onClick={ restar }><i className="material-icons">remove</i></button>
                    </div>
                </div>
                <div className={styles.add}>
                    <button onClick={() => onAdd(amount, setCount)}>Agregar al carrito</button>
                </div>
                
            </div>
        )
        
        
    );
  }
  
  export default ItemCount;