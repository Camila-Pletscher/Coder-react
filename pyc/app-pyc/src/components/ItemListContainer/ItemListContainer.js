import styles from './ItemListContainer.module.css'
import 'materialize-css/dist/css/materialize.min.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { Link, useParams } from 'react-router-dom';

function ItemListContainer() {

    const [categorias, setCategorias] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const {catId} = useParams();
    console.log(catId);
    // const [info, setInfo] = useState([]);

    useEffect(() => {
        // setIsLoading(true);
        setTimeout( () =>
            fetch ('data.json')
            .then ((resp) => resp.json())
            .then ((data) => {setCategorias(catId ? data.filter((item) => item.category === catId) : data)})
            // .finally(() => setIsLoading(false))
            ,2000)
    }, [catId])

    console.log(categorias);
    console.log(setCategorias);


    return (
        <div className='container'>
            <ul>
                <li>Identidad</li>            
                <li>Packaging</li>
                <li>Redes</li>
            </ul>
            <ItemList services={categorias}/>
        </div>
    );
}

export default ItemListContainer;