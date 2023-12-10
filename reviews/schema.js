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
    },
    review: {type: String, required: true},
  },
  { collection: "reviews" }
);

export default schema;
