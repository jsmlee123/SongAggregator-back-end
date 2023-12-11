import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    followed: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { collection: "follows" }
);
schema.index({ follower: 1, followed: 1 }, { unique: true });
export default schema;
