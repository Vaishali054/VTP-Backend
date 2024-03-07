import mongoose from "mongoose";
import app from "./app.js";

const mongodb_url = process.env.MONGO_URL;
if (!mongodb_url) {
  console.error("MONGODB_URL environment variable is not defined.");
} else {
  mongoose.connect(mongodb_url, { dbName: "Invest-o-Rama" });

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("MongoDB connected");

    const PORT = parseInt(process.env.PORT || "3080", 10);
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  });

  db.on("error", (error) => {
    console.error("MongoDB connection error: ", error);
  });
}
