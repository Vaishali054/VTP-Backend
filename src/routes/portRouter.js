import {Router} from "express"
import { authenticateJWT } from "../middlewares/authJWT.js"
import { ValidateStats } from "../middlewares/authStats.js";
import {generatePortfolio, togglePortfolioStatus} from "../controllers/portfolioController.js";

const portRouter=Router();

portRouter.get(
    "/api/portfolio/get",
    generatePortfolio
);

portRouter.post(
    "/api/portfolio/status",
    authenticateJWT,
    ValidateStats,
    togglePortfolioStatus
);


export default portRouter;