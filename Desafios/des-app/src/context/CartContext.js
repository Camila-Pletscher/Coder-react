import { createContext, useEffect, useState } from "react";

// Creamos el context sin pasarle ningun parametro
export const CartContext = createContext();

//Creamos el cartprovider con el children que pide react 
export const CartProvider = ({children}) => {
  //Creamos un estado para el carrito --> en el usestate le pasamos una arrow fx con un try catch para guardarlos productos en el local storage
  const [cartItems, setCartItems] = useState(() => {
    try {
      //Guardamos en el local storage con el nombre cartProducts
      const productosEnLocalStorage = localStorage.getItem('cartProducts')
      //Con esta linea validaos si hay algo en el local storage, si hay lo parseamos para pasarlo de string a objeto y si no hay que devuelva array vacio 
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      //Si hay algun error que devuelva array vacio
      return [];
    }
  });

  //Con dependecia del carrito, es decir cada vez que se modifique el carrito se renderiza y se cargan los productos al local storage pasados a string que es lo que recibe el json 
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    console.log(cartItems)
  }, [cartItems])

  //FX PARA AGREGAR PRODUCTO AL CARRITO 

  const addItemToCart = (product) => {
    //Busco si el producto esta en el carrito y lo guardo en incart
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    //Si esta en el carrito 
    if(inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if(productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1};
          } else return productInCart; // doble validacion?
        })
      )
      //Si no esta en el carrito 
    } else {
      setCartItems([...cartItems, {...product, amount: 1}])
    }
  }

  //FX PARA ELIMINAR PRODUCTO DEL CARRITO 

  const deleteItemToCart = (product) => {
    //Busco si el producto esta en el carrito y lo guardo en incart
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    //Si la cantidad del producto encontrado es 1 vamos a dejar en el carrito todos los productos que sean distintos a ese producto
    if(inCart.amount === 1) {
      setCartItems(
        cartItems.filter(productInCart => productInCart.id !== product.id)
      )
      //si la cantidad no es 1 le resto 1 a la cantidad 
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
        if(productInCart.id === product.id) {
          return {...inCart, amount: inCart.amount - 1}
        } else return productInCart;
      }))
    }
  }

  //FX PARA VACIAR EL CARRITO 

  const emptyCart = () => {
    setCartItems([]);
    localStorage.clear('cartProducts');
  }

  return (
    <CartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart, emptyCart}}>
      {children}
    </CartContext.Provider>
  )
  
}