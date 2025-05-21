"use client";
import React, { useContext } from "react";
import { cartContext } from "../../../../context/cartContext.js";

const AddButton = ({ isLoggedIn }) => {
  const { setCart } = useContext(cartContext);
  return (
    <div>
      <button
        onClick={() => {
          if (isLoggedIn) {
            setCart((prev) => [...prev, "Product"]);
          }
        }}
        disabled={!isLoggedIn}
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
