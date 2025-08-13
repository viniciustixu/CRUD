import mongoose from 'mongoose';



const connectToDatabase = async () => {

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('connected to mongoDB');
  } catch (err) {
    console.log(err);
  }
};

connectToDatabase();

export default connectToDatabase;