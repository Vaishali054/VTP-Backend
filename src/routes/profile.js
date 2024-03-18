import { Router } from "express"
import { updateProfile, deleteProfile } from "../controllers/profile.js";
import { authenticateJWT } from "../middlewares/authJWT.js"
import { validateUser } from "../middlewares/validateUser.js";
import { fetchProfile } from "../controllers/profile.js";
import { getTransactions } from "../controllers/history.js";

const ProfileRouter = Router();

ProfileRouter.post(
    "/profile-update",
    authenticateJWT,
    validateUser,
    updateProfile
);
ProfileRouter.put(
    "/delete",
    authenticateJWT,
    validateUser,
    deleteProfile
);

ProfileRouter.get(
    "/profile",
    authenticateJWT,
    validateUser,
    fetchProfile
);

ProfileRouter.get(
    "/history",
    authenticateJWT,
    validateUser,
    getTransactions
)

export default ProfileRouter;