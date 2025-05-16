import React from "react";
import Info from "./info.jsx";

const navItem = [
  { id: 1, name: "profile" },
  { id: 2, name: "order" },
  { id: 3, name: "logout" },
];
const Sidenav = () => {
  return (
    <>
      <div className="sticky top-2 left-0 w-full shadow-2xl bg-slate-900">
        {navItem?.map((item) => (
          <div key={item.id}>
            <p className="text-center py-4">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="sticky top-2 left-0 w-full my-4 shadow-2xl bg-slate-900">
        <Info />
      </div>
    </>
  );
};

export default Sidenav;
