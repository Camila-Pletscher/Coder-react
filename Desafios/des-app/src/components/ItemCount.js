import { useState } from 'react';
import './ItemCount.css';
import 'materialize-css/dist/css/materialize.min.css';
import Swal from 'sweetalert2';

function ItemCount( { stock }) {
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
                <a onClick={ sumar } class="btn-floating btn-large waves-effect waves-light black"><i class="material-icons">add</i></a>
            </div>
            <div className='col s4 center'>
                <p>{num}</p>
            </div>
            <div className='col s4 center'>
                <a onClick={ restar } class="btn-floating btn-large waves-effect waves-light black"><i class="material-icons">remove</i></a>
            </div>
        </div>
        
        
    );
  }
  
  export default ItemCount;