import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
 // find if cartItems contains productToAdd
 const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
 
 // If found, increase quantity
 if(existingCartItem) {
  return cartItems
  .map(cartItem => cartItem.id === productToAdd.id ? 
    {...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
 }

 // return a new array with modified cart items/ new cart items
 return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
  // find the cartItems to remove
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);
  
  // check if the quantity is equal to 1, If it is remove that item from the cart.
  if(existingCartItem.quantity === 1)
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);

  // return back cart items with matching cart item with reduced quantity
  return cartItems
  .map(cartItem => cartItem.id === productToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
}

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter(cartItems => cartItems.id !== productToClear.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems:[],
  removeItemFromCart: () => {},
  addItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }
    const clearItemFromCart = (clearItemToRemove) => {
      setCartItems(clearCartItem(cartItems, clearItemToRemove));
    }

    useEffect(() => {
      const totalCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
      setCartCount(totalCartCount);
    }, [cartItems]);

    useEffect(() => {
      const totalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
      setTotalPrice(totalPrice);
    }, [cartItems]);

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, totalPrice};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};