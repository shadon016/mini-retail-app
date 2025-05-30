"use client";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../../../../context/cartContext.js";
import { useRouter } from "next/navigation";

const CheckCart = () => {
  const { cart } = useContext(cartContext);
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/cart");
    }
  }, [router, cart]);
  return null;
};
export default CheckCart;
