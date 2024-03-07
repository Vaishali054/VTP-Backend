import cors from "cors"
import express from "express";
import dotenv from "dotenv";

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


export default app;