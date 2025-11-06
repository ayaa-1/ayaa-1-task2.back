  import  mongoose from  "mongoose";
  import  dotenv from "dotenv";
  dotenv.config();
  const connectmongo = async()=>{
    try{
        mongoose.connection.on("connected",()=>{
        console.log("database connected successfully");
    });
        await mongoose.connect("mongodb+srv://ayaaml2005_db_user:ayaahmed@cluster0.heosstq.mongodb.net/Tasks?",
   {
     useNewUrlParser:true,
   useUnifiedTopology:true ,
   });
   } catch (err){
    console.log(err.message);

  }
  };
  export default connectmongo;