import React from "react";
import Info from "./info.jsx";
import Link from "next/link";

const navItem = [
  { id: 1, name: "profile" },
  { id: 2, name: "order" },
  { id: 3, name: "logout" },
];
const authnavItem = [{ id: 1, name: "login" }];
const Sidenav = () => {
  const auth = false;
  return (
    <>
      <div className="sticky top-2 left-0 w-full shadow-2xl bg-slate-900">
        {auth
          ? navItem?.map((item) => (
              <div key={item.id}>
                <p className="text-center py-4">{item.name}</p>
              </div>
            ))
          : authnavItem?.map((item) => (
              <Link href="/signin" key={item.id}>
                <div>
                  <p className="text-center py-4">{item.name}</p>
                </div>
              </Link>
            ))}
      </div>
      <div className="sticky top-2 left-0 w-full my-4 shadow-2xl bg-slate-900">
        <Info />
      </div>
    </>
  );
};

export default Sidenav;
