import { createContext, useContext, useState } from "react";

// Creamos el contexto 
export const CartContext = createContext();

// Exportamos el context en esta funcion para poder llamarla directamente donde la necesitemos 
export const useCart = () => useContext(CartContext);

// Estado inicial del carrito 

const inicial_state = {
    // Items agregados
    addedItems: [],
    // Precio total 
    totalPrice: 0
}; 

export const CartProvider = ({children}) => {
    // Este sera el estado del carrito
    const [cart, setCart] = useState(inicial_state);

    console.log(setCart);

    const addItem = (item) => {
        if (cart.addedItems.some((addedItem) => addedItem.id === item.id)) {
            return;
        }

        const newAddedItems = cart.addedItems.map((product) => {
            if (product.id === item.id) return {...product, cantidad: 2};
            return product;
        })
        setCart({...cart, addedItems: newAddedItems});
    };

    const clear = () => {
        setCart(inicial_state)
    };

    console.log(cart);

    return(
        <CartContext.Provider value={{cart, addItem, clear}}>
            {children}
        </CartContext.Provider>
    )



}

