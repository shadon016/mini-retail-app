"use client";

import React, { useContext } from "react";
import { cartContext } from "../../../../context/cartContext.js";

const CartLength = () => {
  const { cart } = useContext(cartContext);
  const cartLength = cart.length;
  return (
    <div>
      <p>{cartLength}</p>
    </div>
  );
};

export default CartLength;
