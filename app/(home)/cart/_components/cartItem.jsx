"use client";

import React, { useContext } from "react";
import { cartContext } from "../../../../context/cartContext.js";
const CartItem = () => {
  const { cart } = useContext(cartContext);
  return (
    <div>
      {cart.map((c) => (
        <div key={}>
          <p>{c}</p>
        </>
      ))}
    </div>
  );
};

export default CartItem;
