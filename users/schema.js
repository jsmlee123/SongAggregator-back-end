import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: {type: String, requried: true},
    lastName: {
      type: String, 
      requried: true,
      validate: (v) => v!= ""
    },
    email: {
      type: String, 
      requried: false,
      validate: (v) => v!= ""
    },
    dob: { type: Date },
    doh: { type: Date, default: Date.now },
    role: {
      type: String,
      default: "LISTENER",
      enum: ["LISTENER", "ARTIST"],
      required: true
    },
  },
  { collection: "users" }
);
export default schema;
