import { useState } from 'react';
import './ItemCount.css';
import 'materialize-css/dist/css/materialize.min.css';
import Swal from 'sweetalert2';

function ItemCount({stock}) {
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
    return (
        <div className='row contador'>
            <div className='col s4 center'>
                <button onClick={ sumar } class="btn-floating btn-large waves-effect waves-light black"><i class="material-icons">add</i></button>
            </div>
            <div className='col s4 center'>
                <p>{num}</p>
            </div>
            <div className='col s4 center'>
                <button onClick={ restar } className="btn-floating btn-large waves-effect waves-light black"><i className="material-icons">remove</i></button>
            </div>
        </div>
        
        
    );
  }
  
  export default ItemCount;