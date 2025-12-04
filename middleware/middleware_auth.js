 import jwt from "jsonwebtoken";
 import APIError from "../utills/APIError.js";
  import " dotenv/ config";
import { header } from "express-validator";

  const verifyToken =(req,res,next)=>
  {
const authHeader= req.header.authorization;

if (!header ||header.startWith("bearer"))
{ return
    res,status (401).json({message:" "})
}
  }
  const Token = header.split(" ")[1];

  try {
    const currentUser = jwt .verify(Token, process.env.JWT_SECRET_kEY);
    req.currentUser= currentUser;
    next();
  }catch{
    return
    res.status(401).json({message:"TOKEN IS REQUIRED"})
  }

  export const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") 
   { return
     res.status(401).json({ message: "ONLY ADMINS" });
  }
  next();
};
export default verifyToken;
