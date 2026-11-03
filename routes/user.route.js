import { Router } from "express";
import { register } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/',register);

export default userRouter;