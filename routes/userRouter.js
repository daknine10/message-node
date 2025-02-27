import { Router } from "express";
import messageController from "../controllers/messageController.js";

const userRouter = Router();

userRouter.get("/:username", messageController.getUserName)

export default userRouter