import { Router } from "express";
import { authenticateJWT } from "../middlewares/authJWT.js"
import { validateUser } from "../middlewares/validateUser.js";
import { buyStock, sellStock } from "../controllers/action.js";

const ActionRouter = Router();

ActionRouter.post(
    "/buy-stock",
    authenticateJWT,
    validateUser,
    buyStock
);

ActionRouter.post(
    "/sell-stock",
    authenticateJWT,
    validateUser,
    sellStock
);

export default ActionRouter;