import React from "react";
import { cookies } from "next/headers";
import { getLoggedInUser } from "@/models/queries/user.js";

const Profile = async () => {
  const cookieStore = await cookies();
  const userid = await cookieStore.get("userId")?.value;
  const loggedUser = await getLoggedInUser(userid);
  return (
    <div>
      <h1>{loggedUser?.username}</h1>
      <p>{loggedUser?.email}</p>
      {/* <p>joined {loggedUser?.timestamp}</p> */}
    </div>
  );
};

export default Profile;
