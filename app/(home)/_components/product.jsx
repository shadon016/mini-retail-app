import React from "react";
import Card from "./card";

const Product = () => {
  return (
    <div className="h-[calc(100vh - 1rem)] flex gap-6 flex-wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <div key={index}>
          <Card />
        </div>
      ))}
    </div>
  );
};

export default Product;
