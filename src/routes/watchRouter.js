import { Router } from "express"
import { authenticateJWT } from "../middlewares/authJWT.js"
import { validateUser } from "../middlewares/validateUser.js";
import { add_to_watchlist, get_watchlist, remove_from_watchlist } from "../controllers/watchlist.js";

const watchRouter = Router();

watchRouter.get(
    '/get',
    authenticateJWT,
    validateUser,
    get_watchlist
);

watchRouter.post(
    "/add",
    authenticateJWT,
    validateUser,
    add_to_watchlist
);

watchRouter.delete(
    "/remove",
    authenticateJWT,
    validateUser,
    remove_from_watchlist
);


export default watchRouter;
