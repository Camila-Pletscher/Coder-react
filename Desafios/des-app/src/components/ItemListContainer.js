import './ItemListContainer.css';
// import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



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
    console.log(items)
    

    return (
        isLoading ? (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        ) :
        (<div className="contItemList"><ItemList items={items}/></div>)
    );
  }
  
  export default ItemListContainer;