import mongoose from 'mongoose';
import { MONGODB_URI } from 'src/constants/mongoURI';

const connectToDB = async () => {
  try {
    const uri = MONGODB_URI;
    if (mongoose.connections[0].readyState) return;
    await mongoose
      .connect(uri)
      .then(() => console.log('connect to db'));
  } catch (err) {
    console.log('connection failed');
  }
};

export default connectToDB;
