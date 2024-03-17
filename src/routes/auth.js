import {Router} from "express"
import {updateProfile, deleteProfile} from "../controllers/update.js";
import { authenticateJWT } from "../middlewares/authJWT.js"
import { ValidateStats } from "../middlewares/authStats.js";
import { me } from "../controllers/update.js";
import { getTransactions } from "../controllers/history.js";

const AuthRouter=Router();

AuthRouter.post(
    "/profile-update",
    authenticateJWT,
    ValidateStats,
    updateProfile
);
AuthRouter.put(
    "/delete",
    authenticateJWT,
    ValidateStats,
    deleteProfile
);

AuthRouter.get(
    "/profile",
    authenticateJWT,
    ValidateStats,
    me
);

AuthRouter.get(
    "/history",
    authenticateJWT,
    ValidateStats,
    getTransactions
)

export default AuthRouter;