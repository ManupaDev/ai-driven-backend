import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_DATABASE);
    console.log("DB connections successful!");
  } catch (error) {
    console.log(error);
  }
};
