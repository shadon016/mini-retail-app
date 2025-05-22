import React from "react";
import Info from "./info.jsx";
import Link from "next/link";
import Logout from "./logout.jsx";
import CartLength from "../cart/_components/cartLength.jsx";
import { cookies } from "next/headers";
import { getLoggedInUser } from "@/models/queries/user.js";

const authnavItem = [{ id: 1, name: "login" }];

const Sidenav = async () => {
  const cookieStore = await cookies();
  const isloggedInUser = await cookieStore.get("isLoggedIn");
  const auth = isloggedInUser?.value === "true" ? true : false;
  const userid = await cookieStore.get("userId")?.value;

  const loggedUser = await getLoggedInUser(userid);

  return (
    <>
      <div className="sticky top-2 left-0 w-full shadow-2xl bg-slate-900">
        {auth ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <p>{loggedUser?.username}</p>
            <Link href="/profile">
              <p>profile</p>
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
        <div className="flex justify-center py-4">
          <Link href="/cart">
            cart <CartLength />
          </Link>
        </div>
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
