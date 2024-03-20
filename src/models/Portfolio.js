import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema(
  {
    User_Id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "Users",
    },
    status: {
      type: String,
      enum: ["public", "private"],
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "Portfolio",
  },
);

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);
export default Portfolio;
