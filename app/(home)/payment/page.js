import React from "react";
import CheckCart from "./_components/checkCart.jsx";
import PaymentForm from "./_components/paymentForm.jsx";
const Page = () => {
  return (
    <div>
      <CheckCart />
      <div>
        <PaymentForm />
      </div>
    </div>
  );
};

export default Page;
