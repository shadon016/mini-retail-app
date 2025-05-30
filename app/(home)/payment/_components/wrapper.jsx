"use client";
import React, { useContext } from "react";
import { cartContext } from "../../../../context/cartContext.js";
import CartInfo from "./cartInfo.jsx";
import PaymentForm from "./paymentForm.jsx";

const Wrapper = ({ children, user }) => {
  const { cart, setCart } = useContext(cartContext);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex gap-8  p-4 bg-slate-900 rounded-lg shadow-md h-full">
      <div className="flex-1">
        <CartInfo cart={cart} />
      </div>
      <div className="flex-1">
        <PaymentForm
          totalPrice={totalPrice}
          user={user}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
};

export default Wrapper;
