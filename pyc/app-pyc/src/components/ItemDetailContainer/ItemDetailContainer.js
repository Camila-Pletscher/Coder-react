import styles from './ItemDetailContainer.module.css'
import 'materialize-css/dist/css/materialize.min.css';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const [details, setDetails] = useState([]);
    const {detId} = useParams();
    console.log(detId);

    // const [info, setInfo] = useState([]);

    useEffect(() => {
        setTimeout(
            () =>
            fetch ('data.json')
            .then ((resp) => resp.json())
            .then ((data) => {setDetails(detId ? data.find((item) => item.id === detId) : data)})
            ,2000);
    }, [detId])

    return (
        <div className='container'>
            
            <ItemDetail services={details}/>
        </div>
    );
}

export default ItemDetailContainer;