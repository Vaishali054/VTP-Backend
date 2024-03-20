import { Router } from "express";
import { getTransactions } from "../controllers/history.js";
import { authenticateJWT } from "../middlewares/authJWT.js";
import { validateUser } from "../middlewares/validateUser.js";

const HistoryRouter = Router();

HistoryRouter.get("/", authenticateJWT, validateUser, getTransactions);
export default HistoryRouter;
