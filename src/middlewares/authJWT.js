import jwt from "jsonwebtoken";

export const authenticateJWT = async (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";

  if (!token) {
    res.status(403).json({ message: "Unauthorized" });
    return;
  }

  try {
    const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);

    if (typeof data === "string") throw new Error("Invalid jwt data");

    req.body.user = {
      id: data.userId,
    };
    next();
  } catch (err) {
    res.status(403).json({ message: "Unauthorized" });
  }
};
