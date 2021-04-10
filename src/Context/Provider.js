import React, {createContext, useState} from 'react';

export const Context = createContext();
export const Provider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Context.Provider
      value={{
        cartItems,
        addToCart: data => {
          setCartItems([...cartItems, data]);
        },
        removeFromCart: data => {
          setCartItems(cartItems.filter(item => item !== data));
        },
      }}>
      {children}
    </Context.Provider>
  );
};
