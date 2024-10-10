import mongoose from "mongoose";

const uri = process.env.MONGODB_URL;

export const mongooseDbConnection = () => {
  try {
    mongoose.connect(uri);
    console.log("Database connected with MongoDb");
  } catch (error) {
    console.log("Database not connected");
  }
};
