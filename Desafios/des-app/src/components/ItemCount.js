import { useContext, useState } from 'react';
import styles from './ItemCount.module.css';
import 'materialize-css/dist/css/materialize.min.css';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';

function ItemCount({stock, product, id}) {
    console.log(stock, product, id)
    const {addAmountToCart} = useContext(CartContext);
    const {emptyCart} = useContext(CartContext);

    const [count, setCount] = useState(false);

    const [ amount, setAmount ] = useState(0);
    const sumar = () => {
        if(amount < stock) {
            setAmount (amount + 1)
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
        if(amount > 0){
            setAmount (amount - 1)
        }
        
    }

    function borrar(){
        setCount(true);
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
                    <button onClick={() => addAmountToCart(product, amount, id)}>Agregar al carrito</button>
                </div>
                <button onClick={emptyCart}>vaciar</button>
            </div>
        )
        
        
    );
  }
  
  export default ItemCount;