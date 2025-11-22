import { Request, Response } from "express";
import { registerUserService } from "../services/user.service";

export const registerUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (password < 8) {
    console.log("Password should not be less than 8 characters");
    res
      .status(400)
      .json({ error: "Password should not be less than 8 characters" });

    return;
  }

  if (name || email || password) {
    console.log("Required fields are missing");
    res.status(404).json({ error: "Required fields are missing" });

    return;
  }

  try {
    const user = await registerUserService(name, email, password);
    res.status(201).json({ data: user });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
