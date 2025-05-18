"use server";
import { createUser } from "@/models/queries/user.js";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

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
