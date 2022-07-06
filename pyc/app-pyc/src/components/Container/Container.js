import './Container.module.css'
import 'materialize-css/dist/css/materialize.min.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link, useParams } from 'react-router-dom';

function Container() {

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
            
            <ItemList services={info}/>
            {/* <ItemDetailContainer services={info}/> */}
        </div>
    );
}

export default Container;