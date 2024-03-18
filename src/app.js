import cors from "cors"
import express from "express";
import dotenv from "dotenv";
import ProfileRouter from "./routes/profile.js";
import StocksRouter from "./routes/stocksList.js";
import RegisterRouter from "./routes/register.js";
import LoginRouter from "./routes/login.js";
import watchRouter from "./routes/watchRouter.js";
import portRouter from "./routes/portRouter.js";
import LogoutRouter from "./routes/logout.js";

//For loading env variables
dotenv.config();

//Frontend CORS connection
const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000"
        , credentials: true
    })
);

app.get("/", (req, res) => {
    res.send("everything goood");
});

app.use("/auth", ProfileRouter)
app.use("/register", RegisterRouter)
app.use("/stocks", StocksRouter)
app.use("/login", LoginRouter)
app.use("/watchlist", watchRouter)
app.use("/portfolio", portRouter)
app.use("/logout", LogoutRouter)

export default app;
