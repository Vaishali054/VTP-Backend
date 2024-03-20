import { Router } from "express";
import { getStocksList } from "../controllers/getStocksList.js";
import { authenticateJWT } from "../middlewares/authJWT.js";
import { validateUser } from "../middlewares/validateUser.js";

const StocksRouter = Router();

StocksRouter.get("/stocksList", authenticateJWT, validateUser, getStocksList);

export default StocksRouter;
