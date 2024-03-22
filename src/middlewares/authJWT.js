import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const authKeysPath = path.resolve(__dirname, "../utils/authenticationKeys.txt");

const authKeys = fs
  .readFileSync(authKeysPath, "utf8")
  .split("\n")
  .reduce((config, line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      config[key] = value;
    }
    return config;
  }, {});

export const authenticateJWT = async (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";

  if (!token) {
    res.status(403).json({ message: "Unauthorized" });
    return;
  }

  try {
    const data = jwt.verify(token, authKeys.JWT_AUTH_SECRET);

    if (typeof data === "string") throw new Error("Invalid jwt data");

    req.body.user = {
      id: data.userId,
    };
    next();
  } catch (err) {
    res.status(403).json({ message: "Unauthorized" });
  }
};
