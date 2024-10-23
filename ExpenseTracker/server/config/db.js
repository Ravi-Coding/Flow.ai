import mongoose from "mongoose"  // mongodb

const connectDB = async () =>{

    try{

      await mongoose.connect(process.env.MONGO_URI);
      console.log("Waoo Connected MongoDB Successfully ");

    }catch(error){
        console.error(error);
        process.exit(1);
    }
};
export default connectDB;