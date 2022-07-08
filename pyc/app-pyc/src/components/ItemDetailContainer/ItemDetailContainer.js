import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { iditem } = useParams();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(
            () => 
                fetch('..data/data.json')
                .then(resp => resp.json())
                .then((data) => {setproducto(data.filter(i => i.id === iditem))})
                .finally(() => setIsLoading(false))
                ,2000);
    }, [])



    return (
        isLoading ? (<h1>Cargando...</h1>) : 
        (<ItemDetail producto={producto}/>)
    )
};

export default ItemDetailContainer;
