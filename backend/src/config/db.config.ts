import mongoose from "mongoose";
import envConfig from "./env.config";

const connectToMongoose = async () => {
  try {
    const conn = await mongoose.connect(envConfig.db_url);
    console.log("Connected to Mongoose:", conn.connection.host);
  } catch (error: any) {
    console.log("Error connecting to mongoose", error.message);
  }
};

export default connectToMongoose;
