import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCart (item) {
    
    const {deleteItemToCart} = useContext(CartContext);
    return(
        <>
       <div key={item.id}>
        <div>
            <img src={item.image} alt={item.name} />
        </div>
        <div>
            <p>{item.name}</p>
        </div>
        <button onClick={() => {deleteItemToCart(item.id)}}>Eliminar</button>
    </div>
        </>
    )
}

export default ItemCart;

