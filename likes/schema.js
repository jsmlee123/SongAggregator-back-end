import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    SongId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "songs",
      required: true
    }
  },
  { collection: "likes" }
);
schema.index({ UserId: 1, SongId: 1 }, { unique: true });
export default schema;
