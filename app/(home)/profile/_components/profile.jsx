import React from "react";
import { cookies } from "next/headers";
import Image from "next/image";
import { getLoggedInUser } from "@/models/queries/user.js";

const Profile = async () => {
  const cookieStore = await cookies();
  const userid = await cookieStore.get("userId")?.value;
  const loggedUser = await getLoggedInUser(userid);
  return (
    <div>
      <h1 className="border-b-2 mb-4">Persional information</h1>
      <Image
        src="/undraw_cool-girl-avatar_fifz.png"
        height={100}
        width={100}
        alt="avatar"
        className="rounded-full"
      />
      <h1>{loggedUser?.username}</h1>
      <p>{loggedUser?.email}</p>
      <p>{loggedUser?.address || "No address provided"}</p>
      <p>joined {loggedUser?.createdAt.toString().slice(0, 15)}</p>
    </div>
  );
};

export default Profile;
