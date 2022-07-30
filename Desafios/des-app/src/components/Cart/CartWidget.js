import styles from "./CartWidget.module.css";

import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  return (
    <div className={styles.contCart}>
      <Link to="/cart">
        <div className={styles.cart}>
          <i className="small material-icons carti">local_grocery_store </i>
        </div>
      </Link>
      <div className={styles.length}>
        <p>{productsLength}</p>
        </div>
    </div>
  );
}

export default CartWidget;
