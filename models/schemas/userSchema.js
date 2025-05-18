const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String },
  timestamp: { type: Date, default: Date.now },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);
