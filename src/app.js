import cors from "cors"
import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./routes/auth.js";
//For testing purpose dummy login utilities
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import RegisterRouter from "./routes/register.js";

//For loading env variables
dotenv.config();

//Frontend CORS connection
const app=express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.get("/", (req, res) => {
    res.send("everything goood");
    });

app.use("/auth", AuthRouter)
app.use("/register", RegisterRouter)
//For testing purpose made a dummy login for writing and testing authentication middlewares
// app.post('/login', async (req, res) => {
//     const { email_id, password } = req.body;
  
//     try {
//       // Dummy authentication logic
//       const user = await User.findOne({email_id});
//       console.log(user)
  
//       if (user) {
//         // Generate JWT token
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_AUTH_SECRET, { expiresIn: '1h' });
//         console.log(token)
//         res.status(200).json({ message: 'Login successful', token });
//       } else {
//         res.status(401).json({ message: 'Invalid username or password' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });

export default app;