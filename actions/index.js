"use server";
import { createUser, findUser } from "@/models/queries/user.js";
import { User } from "@/models/schemas/userSchema.js";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export const registerAction = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser({
    email,
    password: hashedPassword,
    username,
  });
  if (user) {
    redirect("/signin");
  }
};

export const loginAction = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const user = await User.findOne({ email });
  if (!user) {
    return { status: 401, message: "user not found" };
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { status: 401, message: "wrong password" };
  } else {
    const cookieStore = await cookies();

    cookieStore.set("isLoggedIn", true);
    cookieStore.set("userId", user?._id);
    return { status: 200, message: "login successful" };
  }
};

export const logoutAction = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("isLoggedIn");
  cookieStore.delete("userId", null);
  redirect("/signin");
};
