import { Router } from "express";
import getUserName from "./messageController.js";

const userRouter = Router();

userRouter.get("/:userName", getUserName)

export default userRouter