import './Container.module.css'
import 'materialize-css/dist/css/materialize.min.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function Container() {

    const [info, setInfo] = useState([]);

    const {idcategoria}=useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true);

        setTimeout(() => {
            fetch ('../data/data.json')
            .then ((resp) => resp.json())
            .then((data) => {setInfo(idcategoria ? data.filter((item) => item.categoria === idcategoria) : data )})
            .finally(() => setIsLoading(false))
        },2000);
    }, [idcategoria])

    return (
        <div>
            {
                isLoading ? (<h1>Cargando...</h1>) : (
                    <div className='container'>
            
                    <ItemList services={info}/>
            
                    </div>
                )
            }
        </div>
    );
}

export default Container;