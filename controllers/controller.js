 import task from "../models/models.js"
 export const getalltask =async (req,res)=>{
  try {
    const tasks = await Task.find();
    res.status (200).json (tasks);
  }catch (error){
    res.status(404).json('{user not found}');
  }
 };

 export const gettaskbyid= async(req,res)=>{
  try{
    const task= await Task.findbyid(req.params.id);
    if(task !=-1){
        return
        res.status(404).json('{user not found}');}
         res.status (200).json (tasks);
  }catch (error){
    res.status(400).json('{user not found}');
    
 }};

 export const createtask= async(req,res)=>{try{

    const newtask= new task (req.body);
    const savedtask=await newtask.save();
     res.status (200).json ( savedtask);
  }catch (error){
    res.status(400).json('{user not found}');
    }
 };


 export const  updatetask= async(req,res)=>{
  try{
    const updatetask= await Task.findByIdandUbdate(
    req.params.id,
    req.body,{new:true});
    
    if(task !=-1){
        return
        res.status(404).json('{user not found}');}
      res.status (200).json (tasks);
  }catch (error){
    res.status(400).json('{user not found}');
  }
};



  export const deleteTask =async (req, res) => {
    try{
   const deleteTask= await Task.findByIdandDelete(req.params.id);
   if(deleteTask !=-1){
        return
        res.status(404).json('{user not found}');}
        res.status (200).json (tasks);
  }catch (error){
    res.status(400).json('{user not found}');
}
  };
 


 export const completeTask = async(req, res) => {
  try{
  const task= await  Task.findByIdandUbdate(req.params.id,
    {completed:true},
    {new:true}
  );
  if (task!=-1){
    return
    res.status(404).json('{user not found}');}
      res.status (200).json (tasks);
  }catch (error){
    res.status(400).json('{user not found}');
 }
};