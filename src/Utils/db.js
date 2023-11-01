import mongoose from "mongoose";
import multer from "multer";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    //console.log("MongoDB connected");
  } catch (error) {
    throw new Error("connection fail");
  }
};

export default connect;
