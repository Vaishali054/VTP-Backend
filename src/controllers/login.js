import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from 'js-cookie';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const authKeysPath = path.resolve(__dirname, '../utils/authenticationKeys.txt');

const authKeys = fs.readFileSync(authKeysPath, 'utf8').split('\n').reduce((config, line) => {;
 const [key, value] = line.split('=');
 if (key && value) {
    config[key] = value;
 }
 return config;
}, {});

export const loginUser = async (req, res) => {
  try {
    const { email_id, password } = req.body;

    if (!email_id || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email_id });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      authKeys.JWT_AUTH_SECRET,
      { expiresIn: '7h' }
    );
    Cookies.set("token", token, { expires: 7, secure: true });
    // Respond with token
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
