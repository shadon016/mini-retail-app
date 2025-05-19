import React from "react";
import Info from "./info.jsx";
import Link from "next/link";
import Logout from "./logout.jsx";
import { cookies } from "next/headers";
import { getLoggedInUser } from "@/models/queries/user.js";

const authnavItem = [{ id: 1, name: "login" }];

const Sidenav = async () => {
  const cookieStore = await cookies();
  const isloggedInUser = await cookieStore.get("isLoggedIn");

  const userid = await cookieStore.get("userId")?.value;

  const loggedUser = await getLoggedInUser(userid);
  console.log(loggedUser);
  const auth = isloggedInUser?.value === "true" ? true : false;
  return (
    <>
      <div className="sticky top-2 left-0 w-full shadow-2xl bg-slate-900">
        {auth ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <p>{loggedUser?.username}</p>
            <Link href="/profile">
              <p>profile</p>
            </Link>
            <Link href="/cart">
              <p>cart</p>
            </Link>
            <Link href="/orders">
              <p>orders</p>
            </Link>
          </div>
        ) : (
          authnavItem?.map((item) => (
            <Link href="/signin" key={item.id}>
              <div>
                <p className="text-center py-4">{item.name}</p>
              </div>
            </Link>
          ))
        )}
        {auth && (
          <div className="flex justify-center py-6">
            <Logout />
          </div>
        )}
      </div>
      <div className="sticky top-2 left-0 w-full my-4 shadow-2xl bg-slate-900">
        <Info />
      </div>
    </>
  );
};

export default Sidenav;
