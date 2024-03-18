import { Router } from "express";
import { logoutUser } from "../controllers/logout.js";

const LogoutRouter = Router();

LogoutRouter.post("/", logoutUser);

export default LogoutRouter;
