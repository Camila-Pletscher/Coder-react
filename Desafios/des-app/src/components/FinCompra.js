import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


function FinCompra({total}){

  const {cartItems} = useContext(CartContext);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [phone, setCell] = useState('');

  

  const sendOrder = () => {
    const order = {
          buyer: { name: name, phone: phone, email: email },
          items: [{...cartItems}],
          total: {total}, 
    }

    const db = getFirestore();

    const ordersCollection = collection(db, "orders")

    addDoc(ordersCollection, order).then(({id}) =>console.log(id))
  }

  const cashOutSubmit = (e) => {
    e.preventDefault();
    sendOrder();
    setName('');
    setEmail('');
    setCell('');
  }

  
      
    
      

      return(
        <form onSubmit={cashOutSubmit}>
          <label>Name</label>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
          <label>Email</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)}  value={email} />
          <label>Phone</label>
          <input type="number" onChange={(e)=>setCell(e.target.value)}  value={phone} />

          <button onClick={sendOrder}>Enviar</button>
        </form>
        
      )
}

export default FinCompra;
