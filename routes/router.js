 import  express  from "express";
 const router = express.Router();
 import  {
    getalltask,
    gettaskbyid,
    createtask,
    updatetask,
    completetask,
    deletetask
 } from "../controllers/controller.js";
 router.get('/', getalltask);
router.get('/:id', gettaskbyid);
router.post('/',createtask);
router.put('/:id', updatetask);
router.patch('/:id/complete',completetask);
router.delete('/', deletetask);
 

import Task from "../models/Task.js";
import { verifyToken } from "../middleware_auth.js";

router.post("/", verifyToken, async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});


router.get("/", verifyToken, async (req, res) => {
  const task = await Task.find();
  res.json(task);
});

export default router;

     