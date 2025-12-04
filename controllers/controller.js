 import task from "../models/models.js";
import asynicfnwrap from "../middleware/asynicfnwrap..js";
import APIError from "../utills/APPError..js";
import textstatus from "../utills/status.js";
import user from "../models?user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

 export const getalltask = asynicfnwrap(async (req,res)=>{
    const tasks = await Task.find().limit(limit).skip(skip);
const query = req.query;
const limit = query.limit;
const page = query.page;
const skip= (page-1)*limit;
res.status(textstatus.ok).json({success:true,task});
     
  });




 export const gettaskbyid= asynicfnwrap(async(req,res)=>{
    const task= await Task.findbyid(req.params.taskId);
    if(!task){
        const error= APIError.create(
          textstatus.not_found
          ,false,
          "task not found");
          return next (error);
    }
    res.status(textstatus.ok).json({success:true,task});
  });




 export const createtask=  asynicfnwrap(async(req,res, next)=>{
    const newtask= new task (req.body);
    const savedtask=await newtask.save();
    if(!task){
        const error= APIError.create(textstatus.not_found,
          false,
          "task not found");
          return next(error);
    }
    res.status(textstatus.ok).json({success:true,task});
  });
 




 export const  updatetask=  asynicfnwrap(async(req,res, next)=>{
    const updatetask= await Task.findByIdandUbdate(
    req.params.id,
    req.body,{new:true});
    
     if(!task){
        const error= APIError.create(textstatus.not_found,
          false,
          "task not found");
          return next(error);
    }
    res.status(textstatus.ok).json({success:true,task});
 });




  export const deleteTask = asynicfnwrap(async (req, res, next) => {
   const deleteTask= await Task.findByIdandDelete(req.params.id);
   if(!task){
        const error= APIError.create(textstatus.not_found,
          false,
          "task not found");
          return next(error);
    }
    res.status(textstatus.no_content).json({success:true,
      message:"task deleted successfully"});
});
 


 export const completeTask = asynicfnwrap(async(req, res,next ) => {
  
  const task= await  Task.findByIdandUbdate(req.params.id,
    {completed:true},
    {new:true}
  );
    if(!task){
        const error= APIError.create(textstatus.not_found,
          false,
          "task not found");
          return next(error);
    }
    res.status(textstatus.ok).json({success:true,task});
 });