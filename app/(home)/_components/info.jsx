import React from "react";
import Link from "next/link";

const Info = () => {
  return (
    <div>
      <div className="text-center p-4">
        <Link href="/">
          <h2 className="text-4xl tracking-wide font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
            Zayra
          </h2>
        </Link>
        <p className="text-xs my-2">“Smart. Stylish. Seamless Shopping.”</p>
        <p className="text-justify">
          Your go-to destination for trendy finds and everyday essentials — all
          in one place.
        </p>
        <p className="py-4">&copy; 2025 Zayra. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Info;
