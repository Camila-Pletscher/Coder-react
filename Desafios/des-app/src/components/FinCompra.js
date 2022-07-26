import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function FinCompra(){

  const {cartItems} = useContext(CartContext);
  console.log(cartItems);

  

  const sendOrder = () => {
    const order = {
          buyer: { name: "agus", phone: "111", email: "a@A.com" },
          items: [...cartItems],
          total: 100, 
    }

    const db = getFirestore();

    const ordersCollection = collection(db, "orders")

    addDoc(ordersCollection, order).then(({id}) =>console.log(id))
  }

  
      
    
      

      return(
        <button onClick={sendOrder}>Finalizar compra</button>
      )
}

export default FinCompra;
