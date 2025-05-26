"use client";

import React, { useContext } from "react";
import { cartContext } from "../../../../context/cartContext.js";
import Action from "./action.jsx";
const CartItem = () => {
  const { cart, setCart } = useContext(cartContext);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleRemove = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
  };
  const handleAdd = (id) => {
    const updateCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updateCart);
  };
  const handleSubtract = (id) => {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updateCart);
  };
  return (
    <>
      <div>
        {cart.length === 0 && <p>Cart is empty</p>}
        {cart.map((c) => (
          <div key={c.id} className="flex justify-between">
            <p>
              {c.title} {c?.quantity}
            </p>
            <Action
              remove={handleRemove}
              id={c?.id}
              add={handleAdd}
              sub={handleSubtract}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button>checkout</button>
        </div>
      )}
    </>
  );
};

export default CartItem;
