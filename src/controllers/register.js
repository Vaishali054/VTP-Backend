import User from "../models/User.js";
import Portfolio from "../models/Portfolio.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email_id, password } = req.body;

    if (!name || !email_id || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    let existingUser = await User.findOne({ email_id });

    if (existingUser) {
      if (existingUser.accountStatus === "deleted") {
        const hashedPassword = await bcrypt.hash(password, 11);
        existingUser.name = name;
        existingUser.password = hashedPassword;
        existingUser.accountStatus = "active";
        await existingUser.save();
      } else {
        return res.status(400).json({ message: "Email already registered" });
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 11);

      const newUser = new User({
        name,
        email_id,
        password: hashedPassword,
      });
      existingUser = await newUser.save();
    }

    const existingPortfolio = await Portfolio.findOne({
      User_Id: existingUser._id,
    });
    if (!existingPortfolio) {
      const newPortfolio = new Portfolio({
        User_Id: existingUser._id,
        status: "private",
      });
      await newPortfolio.save();
    }

    res
      .status(201)
      .json({ message: "User registered successfully", user: existingUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
