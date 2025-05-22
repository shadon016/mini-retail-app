import React from "react";
import Image from "next/image";

const Card = ({ product }) => {
  return (
    <div>
      <div className="bg-slate-900 shadow-md rounded-lg p-4 min-w-[200px] max-w-[300px]">
        <Image
          src="/product.jpg"
          alt="Card Image"
          width={90}
          height={60}
          className="rounded-lg w-full"
        />
        <h2 className="py-2">{product?.title}</h2>
        <p className="text-gray-700">{product?.price}</p>
      </div>
    </div>
  );
};

export default Card;
