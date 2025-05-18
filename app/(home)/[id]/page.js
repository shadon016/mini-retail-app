import React from "react";

import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <div>
        <Image src="/product.jpg" height={100} width={100} alt="img" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Product Name</h1>
        <p className="text-gray-700">Product Description</p>
        <p className="text-lg font-semibold">$99.99</p>
      </div>
    </div>
  );
};

export default Page;
