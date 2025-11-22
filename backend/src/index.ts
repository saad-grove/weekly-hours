import express, { Request, Response } from "express";
import envConfig from "./config/env.config";
import cors from "cors";
import connectToMongoose from "./config/db.config";
import userRouter from "./routes/user.route";

const app = express();
const PORT = envConfig.port;

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({ server: true });
});

app.use("/api/users", userRouter);

connectToMongoose();

app.listen(PORT, () => console.log("Server running on PORT:", PORT));
