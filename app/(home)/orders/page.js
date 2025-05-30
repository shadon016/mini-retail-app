import React from "react";
import { Order } from "@/models/schemas/orderSchema.js";

const Page = async () => {
  const orders = await Order.find({}).sort({ createdAt: -1 }).limit(10).lean();
  return (
    <div>
      <h1 className="text-2xl font-bold">Orders</h1>
      <p className="text-gray-600">This is the orders page.</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Order History</h2>
        {orders?.map((order) => (
          <div key={order._id}>
            <p>{order?.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
