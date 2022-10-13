import * as mongoose from "mongoose";
import "colorts/lib/string";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI ??
        "mongodb+srv://root:root123@hearthstonecardscluster.wxwbgvy.mongodb.net/HearthstoneCardsDB?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
