"use client";

import { createContext, useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

export const CartContext = createContext({
  cartItems: [] as CartItem[],
  addToCart: (item: Product) => {},
  removeOneFromCart: (itemId: number) => {},
  removeAllFromCart: (itemId: number) => {},
  clearCart: () => {},
  getCartTotal: () => 1 + 1,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // server fix for localStorage: https://stackoverflow.com/a/73853147/15598055
  const isRunningOnServer = typeof window === "undefined";
  const itemsInCart = isRunningOnServer
    ? []
    : localStorage.getItem("cartItems");

  const [cartItems, setCartItems] = useState<CartItem[]>(
    !isRunningOnServer && itemsInCart
      ? JSON.parse(localStorage.getItem("cartItems")!)
      : []
  );

  const addToCart = (item: Product) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === item.id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { product: item, quantity: 1 }]);
    }
  };

  const removeOneFromCart = (itemId: number) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === itemId
    );

    if (!isItemInCart) {
      return;
    }

    if (isItemInCart.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.product.id !== itemId)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeAllFromCart = (itemId: number) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === itemId
    );

    if (!isItemInCart) {
      return;
    }

    setCartItems(
      cartItems.filter((cartItem) => cartItem.product.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeOneFromCart,
        clearCart,
        getCartTotal,
        removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
