import {Router} from "express"
import {getStocksList} from "../controllers/getStocksList.js";

const StocksRouter=Router();

StocksRouter.get("/stocksList", getStocksList);

export default StocksRouter;