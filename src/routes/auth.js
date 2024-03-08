import {Router} from "express"
import {updateProfile, deleteProfile} from "../controllers/update.js";
import { authenticateJWT } from "../middlewares/authJWT.js"
import { ValidateStats } from "../middlewares/authStats.js";

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

export default AuthRouter;