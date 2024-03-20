import User from "../models/User.js";

export const validateUser = async (req, res, next) => {
  const userId = req.body.user.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.accountStatus === "deleted") {
      return res.status(403).json({ message: "The account is deleted" });
    }

    req.body.user = user;
    next();
  } catch (err) {
    console.error("Error validating user data:", err);
    res
      .status(500)
      .json({ message: "Internal server error during user data validation" });
  }
};
