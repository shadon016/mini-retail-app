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

const findUser = async (userEmail) => {
  try {
    await User.findOne({ email: userEmail });
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};
export { createUser, findUser };
