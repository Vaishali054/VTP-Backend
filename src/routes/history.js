import { Router } from "express";
import { getTransactions } from "../controllers/history.js";

const HistoryRouter = Router();

HistoryRouter.get("/", getTransactions);

export default HistoryRouter;
