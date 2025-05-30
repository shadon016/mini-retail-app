import React from "react";
import { Order } from "@/models/schemas/orderSchema.js";
import { cookies } from "next/headers";

const Page = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  const orders = await Order.find({ userId: userId })
    .sort({ createdAt: -1 })
    .limit(10)
    .lean();
  return (
    <div>
      <h1 className="text-2xl font-bold">Orders</h1>
      <p className="text-gray-600">This is the orders page.</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Order History</h2>
        {orders?.map((order) => (
          <div key={order._id} className="border p-4 mb-4">
            {order?.products?.map((product) => (
              <div key={product?.id} className="">
                <p>
                  {product.title} x {product.quantity} ${product.price}
                </p>
              </div>
            ))}
            <p>total : ${order?.totalPrice}</p>
            <p>{new Date(order?.createdAt).toLocaleDateString()}</p>
            <p>Status: {order?.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
