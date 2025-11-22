import bcryptjs from "bcryptjs";
import User from "../models/user.model";

export const registerUserService = async (
  name: string,
  email: string,
  password: string
) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const hashedPassword = await bcryptjs.hash(password, 10);

  return await User.create({ name, email, password: hashedPassword });
};
