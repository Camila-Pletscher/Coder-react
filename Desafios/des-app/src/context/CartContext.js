import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

  

  const [cartItems, setCartItems] = useState([]);
  

  

  //Agregar producto al carrito con la cantidad del itemCount
  const addItemToCart = (item, amount, setCount) => {
    
    
    if(cartItems.some(el => el.id === item.id)){
      
      let index = cartItems.findIndex(el => el.id === item.id)

      let product = cartItems[index];
      product.amount = product.amount + amount;
      product.subprecio = product.precio * product.amount

      const newCart = [...cartItems];
      newCart.splice(index, 1, product);

      setCartItems([...newCart]);


    } else {
      let product = {...item, amount};
      product.subprecio = product.precio * product.amount
      setCartItems([...cartItems, product ])
    }
    

  };

  const deleteCart = () => {
    setCartItems([]);
  }

  const deleteItemToCart = (id) => {
    const newCart = [...cartItems];
    let index = newCart.findIndex(el => el.id === id);
    newCart.splice(index, 1);

    console.log(newCart);

    setCartItems([...newCart])

    if (newCart === []) {
      return
    }
  }

  return (
    // En valor se pasa todo lo que queremos usar
    <CartContext.Provider value={{ cartItems, addItemToCart, deleteCart, deleteItemToCart}}>
      {/* se agrega el children recibido por props */}
      {children}
    </CartContext.Provider>
  );
};
