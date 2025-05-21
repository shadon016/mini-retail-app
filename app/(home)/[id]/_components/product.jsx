import React from "react";
import Image from "next/image";
import { cookies } from "next/headers";
import AddButton from "./addButton.jsx";
const Product = async () => {
  const cookieStore = await cookies();

  const isLoggedIn = await cookieStore.get("userId");

  return (
    <>
      <div>
        <Image src="/product.jpg" height={100} width={100} alt="img" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Product Name</h1>
        <p className="text-gray-700">Product Description</p>
        <p className="text-lg font-semibold">$99.99</p>
        <AddButton isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
};

export default Product;
