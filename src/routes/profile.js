import { Router } from "express"
import { updateProfile, deleteProfile, fetchProfile } from "../controllers/profile.js";
import { authenticateJWT } from "../middlewares/authJWT.js"
import { validateUser } from "../middlewares/validateUser.js";
import { updateBalance } from "../controllers/profile.js";

const ProfileRouter = Router();

ProfileRouter.post(
    "/profile-update",
    authenticateJWT,
    validateUser,
    updateProfile
);

ProfileRouter.post(
    "/update-balance",
    updateBalance
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

export default ProfileRouter;