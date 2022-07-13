import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Guardamos producos en local storage y validamos si hay productos lo parseamos y sino que devuelva array vacio, si hay error array vacio tambien
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  // Dependecia del cambio en el estado del carrito, cada vez que se modifique el carrito se va a setear el local storage y se pase a string
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  // Fx para agregar producto al carrito
  const addItemToCart = (product) => {
    // primero chequeamos si esta repetido
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    // Si esta en el carrito, lo recorremos y sumamos a su cantidad +1
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
      // Si no esta en el carrito seteamos el carrito con los productos que estaban, con el producto nuevo y con su cantidad en 1
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };
    const addAmountToCart = (product, amount, id) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
          );
          if (inCart) {
            setCartItems(
              cartItems.map((productInCart) => {
                if (productInCart.id === product.id) {
                  return { ...inCart, amount: inCart.amount + amount};
                } else return productInCart;
              })
            );
        } else {
            setCartItems([...cartItems, { ...product, amount: amount }]);
    }
    }

    // Fx para eliminar un producto
    const deleteItemToCart = (product) => {
      const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
      );

      // Hacemos filter si la cantidad es 1, devuelve el array con todos los productos menos con ese
      if (inCart.amount === 1) {
        setCartItems(
          cartItems.filter((productInCart) => productInCart.id !== product.id)
        );
        // Sino si la cantidad no es 1 se le descuenta 1 a esa cantidad
      } else {
        setCartItems((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        });
      }
    };

    return (
      // En valor se pasa todo lo que queremos usar
      <CartContext.Provider
        value={{ cartItems, addItemToCart, deleteItemToCart,addAmountToCart }}
      >
        {/* se agrega el children recibido por props */}
        {children}
      </CartContext.Provider>
    );
};
