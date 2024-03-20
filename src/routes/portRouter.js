import { Router } from "express"
import { authenticateJWT } from "../middlewares/authJWT.js"
import { validateUser } from "../middlewares/validateUser.js";
import { generatePortfolio, togglePortfolioStatus } from "../controllers/portfolio.js";

const portRouter = Router();

portRouter.get(
    "/get?",
    generatePortfolio
);

portRouter.post(
    "/status",
    authenticateJWT,
    validateUser,
    togglePortfolioStatus
);


export default portRouter;
