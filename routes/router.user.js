 import express from "express";
import User from "../models/User.js";
import { verifyToken, requireAdmin } from "../middleware_auth.js";

const router = express.Router();

router.get("/", verifyToken, requireAdmin, async (req, res) => {
  const users = await User.find().select("password");
  res.json(users);
});

export default router;