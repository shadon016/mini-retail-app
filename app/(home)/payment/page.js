import React from "react";
import CheckCart from "./_components/checkCart.jsx";
import { cookies } from "next/headers";
import Wrapper from "./_components/wrapper.jsx";
import { getLoggedInUser } from "../../../models/queries/user.js";

const Page = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  const user = await getLoggedInUser(userId);
  const parsedUser = JSON.stringify(user);
  return (
    <div>
      <CheckCart />
      <div>
        <Wrapper user={parsedUser} />
      </div>
    </div>
  );
};

export default Page;
