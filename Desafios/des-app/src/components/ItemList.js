
import './ItemList.css';
import 'materialize-css/dist/css/materialize.min.css';
import Swal from 'sweetalert2';
import Item from './Item';
import { useEffect, useState } from 'react';

function ItemList( ) {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        setTimeout(
            fetch ('data.json')
            .then ((resp) => resp.json())
            .then ((data) => setInfo (data))
            ,2000)
    })

    
    return (
        <div className='container'>
            {info && info.map (i => <Item product = {i.nombre} price = {i.precio} description = {i.descripcion}/>)}
        </div>
        
        
    );
  }
  
  export default ItemList;