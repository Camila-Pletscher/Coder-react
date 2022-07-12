import { useState } from 'react';
import styles from './ItemCount.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import Swal from 'sweetalert2';

function ItemCount({stock}) {
    const [count, setCount] = useState(false);

    const [ num, setNum ] = useState(0);
    const sumar = () => {
        if(num < stock) {
            setNum (num + 1)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Lo sentimos',
                text: 'No hay más stock disponible',
                timer: 2000
              })
        }
        
    }

    const restar = () => {
        if(num > 0){
            setNum (num - 1)
        }
        
    }

    function borrar(){
        setCount(true);
    }
    return (
        count ? (<p>Cantidad seleccionada: {num}</p>) : (
            <div className={styles.contCount}>
                <div className={styles.contButton}>
                    <div className={styles.circle}>
                        <button onClick={ sumar }><i className="material-icons">add</i></button>
                    </div>
                    <div>
                        <p>{num}</p>
                    </div>
                    <div className={styles.circle}>
                        <button onClick={ restar }><i className="material-icons">remove</i></button>
                    </div>
                </div>
                <div className={styles.add}>
                    <button onClick={borrar}>Agregar al carrito</button>
                </div>
            </div>
        )
        
        
    );
  }
  
  export default ItemCount;