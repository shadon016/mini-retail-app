import React from "react";
import Card from "./card";
import Link from "next/link";
import { products } from "@/models/data.js";

const Product = () => {
  return (
    <div className="h-[calc(100vh - 1rem)] flex gap-4 flex-wrap">
      {products?.map((product) => (
        <div key={product?.id}>
          <Link href={`/${product?.id}`}>
            <Card product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
