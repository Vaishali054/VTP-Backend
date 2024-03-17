import { Router } from "express";
import { loginUser } from "../controllers/login.js";

const LoginRouter = Router();

LoginRouter.post("/", loginUser);

export default LoginRouter;
