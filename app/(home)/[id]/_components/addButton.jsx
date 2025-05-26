"use client";
import React, { useContext, useState } from "react";
import { cartContext } from "../../../../context/cartContext.js";

const AddButton = ({ isLoggedIn, product }) => {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(cartContext);

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };
  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={!isLoggedIn}
        title={isLoggedIn ? "Add to Cart" : "Please login"}
        className={
          !isLoggedIn
            ? "bg-gray-400 cursor-progress"
            : "bg-blue-500 cursor-pointer"
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddButton;
