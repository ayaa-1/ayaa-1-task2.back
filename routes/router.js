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
 export default router;
 

     