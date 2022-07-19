import './ItemListContainer.css';
// import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from './Banner';



function ItemListContainer() {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {idcategoria}=useParams();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetch ('../data/data.json')
            .then ((resp) => resp.json())
            .then((data) => {setItems(idcategoria ? data.filter((items) => items.categoria === idcategoria) : data)})
            .finally (() => setIsLoading(false))
        },2000)
    }, [idcategoria])
    

    return (
        isLoading ? (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        ) :
        (<><Banner></Banner><div className="contItemList"><ItemList items={items}/></div></>)
    );
  }
  
  export default ItemListContainer;