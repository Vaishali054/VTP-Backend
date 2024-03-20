import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    User_Id: {
      type: mongoose.Schema.Types.ObjectId,
      default: function () {
        return new mongoose.Types.ObjectId();
      },
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    current_Balance: {
      type: Number,
      default: 100000,
      required: true,
    },
    accountStatus: {
      type: String,
      enum: ["active", "deleted"],
      default: "active",
    },
  },
  {
    timestamps: true,
    collection: "Users",
  },
);

const User = mongoose.model("Users", userSchema);

export default User;
