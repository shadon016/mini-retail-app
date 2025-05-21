import React from "react";
import Product from "./_components/product.jsx";

const Page = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <Product />
    </div>
  );
};

export default Page;
