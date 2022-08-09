import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import ItemCart from "./ItemCart";
import styles from "./Cart.module.css";

function Cart() {
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems, emptyCart, total } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  return (
    <div>
      {cartItems && (
        <div>
          <div className={styles.contTitleCart}>
            <div className={styles.contCartIcon}>
              <i className="small material-icons carti">local_grocery_store </i>
            </div>
            <div className={styles.titleCart}>
              <p>Carrito de compras</p>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className={styles.carritoVacio}>
              <p>Tu carrito está vacio</p>
              <Link to="/services">
              <button>
                Ir a comprar
              </button>
              </Link>
            </div>
            
          ) : (
            <div className={styles.contProducts}>
              <div className={styles.contDetail}>
                <div>
                  {cartItems?.map((item) => (
                    <ItemCart {...item} key={item.id} />
                  ))}
                </div>

                <div className={styles.contAmount}>
                  <div className={styles.contProductosAdd}>
                    <p>Productos agregados: {productsLength}</p>
                  </div>
                  <div className={styles.contVaciar}>
                    <button onClick={emptyCart}>
                      <div>
                        <i class="material-icons">delete_forever</i>
                      </div>
                      <div>Vaciar</div>
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.contTotalLine}>
                <div className={styles.contTotal}>
                  <div className={styles.totalTxt}>
                    <p>Total:</p>
                  </div>
                  <div className={styles.totalNum}>
                    <p>${total}</p>
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.contComprar}>
                  <Link to="/finalizar">
                    <button>
                      <div>
                        <i class="material-icons">check_circle</i>
                      </div>
                      <div>Comprar carrito</div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
