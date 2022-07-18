import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

function Cart () {
    const {deleteCart} = useContext(CartContext);
    const {cartItems} =useContext(CartContext);
    return(
        <>
           
        <div>
            {cartItems?.map ((item) => (
                
                <ItemCart 
                    {...item} key={item.id}
                />
            ))}
        </div>
        <button onClick={deleteCart}>vaciar</button>
        </>
    )
}

export default Cart;