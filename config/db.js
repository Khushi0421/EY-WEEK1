import mongoose, { connect } from "mongoose";
import colors from "colors";
const connetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDb Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MONGODB ${error}`.bgRed.white);
  }
};

export default connetDB;
