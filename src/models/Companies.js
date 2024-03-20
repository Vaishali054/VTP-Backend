import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    max_stock_price: {
      type: Number,
      required: true,
    },
    min_stock_price: {
      type: Number,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    Company_Id: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    current_Price: {
      type: Number,
      required: true,
    },
    change: {
      type: Number,
      required: true,
    },
    pChange: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "Companies",
  },
);

// module.exports = mongoose.model('Companies', CompanySchema);

const Companies = mongoose.model("Companies", CompanySchema);

// module.exports = Companies;
export default Companies; // Export the model for use in other files
