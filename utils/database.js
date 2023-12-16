import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB is already connected.");
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "share_prompt",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
