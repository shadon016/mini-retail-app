import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Orders</h1>
      <p className="text-gray-600">This is the orders page.</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Order History</h2>
        <ul className="list-disc pl-5">
          <li>Order #12345 - Delivered</li>
          <li>Order #67890 - In Transit</li>
          <li>Order #54321 - Cancelled</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
