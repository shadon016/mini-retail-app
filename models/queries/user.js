import { User } from "@/models/schemas/userSchema.js";

const createUser = async (userInfo) => {
  try {
    const user = await User.create(userInfo);
    console.log(user);
    redirect("/login");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { createUser };
