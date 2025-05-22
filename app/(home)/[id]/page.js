import React from "react";
import Product from "./_components/product.jsx";
import { products } from "../../../models/data.js";

const Page = async ({ params }) => {
  const { id } = await params;
  const productData = products.find((p) => p.id === parseInt(id));
  return (
    <div>
      <Product product={productData} />
    </div>
  );
};

export default Page;
