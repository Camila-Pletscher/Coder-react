import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import FinCompra from "./FinCompra";
import {  Link } from 'react-router-dom';


function Cart() {
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems, emptyCart } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.precio,
    0
  );

  return (
    <div>
      {cartItems && (
        <div>
          <h2>Tu carrito</h2>

          {cartItems.length === 0 ? (
            <p>Tu carrito esta vacio</p>
          ) : (
            <>
              <div>
                {cartItems?.map((item) => (
                  <ItemCart {...item} key={item.id} />
                ))}
              </div>
              <div>Cantidad de items: {productsLength}</div>
              <button onClick={emptyCart}>Vaciar </button>
              <Link to="/finalizar">
              <FinCompra/>
              </Link>
            </>
          )}

          <h2>Total: {total}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;

// import styles from "./Cart.module.css";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import ItemCart from "./ItemCart";
// import FinCompra from "./FinCompra";

// function Cart() {
//   const { deleteCart } = useContext(CartContext);
//   const { cartItems } = useContext(CartContext);
//   const [vaciar, setVaciar] = useState(false);

//   if (cartItems.length < 1) {
//     console.log(cartItems.length);
//   }

//   return (

//     vaciar || cartItems.length < 1 ? (<p>No hay productos en el carrito</p>) : (<div>
//         {cartItems?.map((item) => (
//           <ItemCart {...item} key={item.id} />
//         ))}
//         <div onClick={() => setVaciar(true)} className={styles.contDelete}>
//         <div className={styles.delete} onClick={deleteCart}>
//           <div className={styles.icon}>
//             <i class="material-icons">delete_forever</i>
//           </div>
//           <div className={styles.vaciar}>Vaciar</div>
//         </div>
//       </div>
//       <FinCompra/>
//       </div>)

//   );
// }

// export default Cart;
