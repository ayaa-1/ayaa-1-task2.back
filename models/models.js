 import mongoose from "mongoose";
 const TaskcSchema= new mongoose.Schema(
    {
        title :{type:String, required:true},
        price :{type:Number, required:true},
        completed :{type:String, required:true},
    },
    { versionkey:false , timestamps:true}
    
 );
 const tasks = mongoose.model("tasks",TaskcSchema)
 export default tasks ;