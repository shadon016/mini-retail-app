import React from "react";

const CartInfo = ({ cart }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Cart Items</h2>
      {cart?.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} {item?.quantity} x ${item.price * item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartInfo;
