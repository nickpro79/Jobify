import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastname: {
    type: String,
    default: "lastName",
  },
  location: {
    type: String,
    default: "My City",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.model("User", UserSchema);
