import { Router } from "express";
import { registerUser } from "../controllers/register.js";

const RegisterRouter = Router();

RegisterRouter.post("/", registerUser);

export default RegisterRouter;
 