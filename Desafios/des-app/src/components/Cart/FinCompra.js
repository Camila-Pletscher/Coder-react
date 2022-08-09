import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import styles from "./FinCompra.module.css";
import { useNavigate } from "react-router-dom";


function FinCompra() {

  const navigate = useNavigate();

  const { cartItems, total } = useContext(CartContext);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setCell] = useState("");

  const sendOrder = () => {
    const order = {
      buyer: { name: name, phone: phone, email: email },
      items: [{ ...cartItems }],
      total: { total },
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
        Swal.fire(`Orden de compra: ${id}`);
    })
  };

  const cashOutSubmit = (e) => {
    e.preventDefault();
    sendOrder();
    setName("");
    setEmail("");
    setCell("");
    setTimeout(() => {
      navigate('/services');
    }, 1000);
  };

  return (
    <div>
      <div className={styles.contTitleBuy}>
        <div className={styles.contBuyIcon}>
          <i className="small material-icons carti">check_circle</i>
        </div>
        <div className={styles.titleBuy}>
          <p>Finalizar compra</p>
        </div>
      </div>
      <div className={styles.contGeneral}>
        <div className={styles.contInversion}>
          <div className={styles.gracias}>
            <p>Muchas gracias por elegirnos</p>
          </div>
          <div className={styles.contTotal}>
            <div className={styles.contInversionTxt}>
              <p>Total de su inversión:</p>
            </div>
            <div className={styles.contInversionNum}>
              <p>${total}</p>
            </div>
          </div>
          <div className={styles.line}></div>
        </div>

        <div className={styles.contForm}>
          <div className={styles.complete}>
            <p>Complete los siguientes datos para finalizar:</p>
          </div>
          <div className={styles.form}>
            <div>
              <form onSubmit={cashOutSubmit}>
                <label>Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                   
                />
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  
                />
                <label>Phone</label>
                <input
                  type="number"
                  onChange={(e) => setCell(e.target.value)}
                  value={phone}
                  
                />
              </form>
            </div>
            
            <div className={styles.contSend}>
            
              <button onClick={cashOutSubmit}>
                <div>
                  <i class="material-icons">send</i>
                </div>
                <div>Enviar</div>
              </button>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinCompra;
