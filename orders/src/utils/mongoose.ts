import mongoose from "mongoose";
import {env} from "./env";

export async function mongoConnect() {
  return mongoose
    .connect(env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}
