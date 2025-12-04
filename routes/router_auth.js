 import express from "express";
 import bcrypt from "bcryptjs";
 import jwt from"jsonwebtoken";
 import " dotenv/ config";
 const router = express.Router();

 router.post("/register", async(req,res) =>
    {
   const { name ,email,password, role }=req.body;
   const userExist= await User.find({email});
   if (userExist) return
   res.status(400).json({message:"EMAIL ALREADY EXiSTS"});
   const hashedpassword= await bcrypt.hash(password,10);

   const user = await User.create({
    name ,
    email,
    password,
    role
   }); res.status(201).json(user);
 })



 router.post("/login", async(req,res) =>
    {
   const { email,password}=req.body;
   const user = await User.find({email});
   if (!user)return
   res.status(400).json({message:"INVAILD"});
   const isMatch = await bcrypt.compare(password,user.password);
   if (!isMatch) return
   res.status(400).json({message:"INVAILD"});
   const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({ token });
});

export default router;
