import React from "react";

const navItem = [
  { id: 1, name: "profile" },
  { id: 2, name: "order" },
  { id: 3, name: "logout" },
];
const Sidenav = () => {
  return (
    <div className="sticky top-20 left-0 w-full shadow-2xl bg-slate-900">
      {navItem?.map((item) => (
        <div key={item.id}>
          <p className="text-center py-4">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidenav;
