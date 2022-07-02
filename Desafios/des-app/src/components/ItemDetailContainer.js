import 'materialize-css/dist/css/materialize.min.css';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer( ) {
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
        {info && info.map (i => <ItemDetail product = {i.nombre} price = {i.precio} description = {i.descripcion} img= {i.img}/>)}
        </div>

        
        
        
    );
  }
  
  export default ItemDetailContainer;