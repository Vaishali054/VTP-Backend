import { Router } from "express"
import { updateProfile, deleteProfile } from "../controllers/update.js";
import { authenticateJWT } from "../middlewares/authJWT.js"
import { validateUser } from "../middlewares/authStats.js";
import { me } from "../controllers/update.js";
import { getTransactions } from "../controllers/history.js";

const AuthRouter = Router();

AuthRouter.post(
    "/profile-update",
    authenticateJWT,
    validateUser,
    updateProfile
);
AuthRouter.put(
    "/delete",
    authenticateJWT,
    validateUser,
    deleteProfile
);

AuthRouter.get(
    "/profile",
    authenticateJWT,
    validateUser,
    me
);

AuthRouter.get(
    "/history",
    authenticateJWT,
    validateUser,
    getTransactions
)

export default AuthRouter;