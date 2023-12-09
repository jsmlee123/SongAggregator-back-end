import mongoose, { SchemaType } from "mongoose";

const schema = mongoose.Schema(
  {
    AlbumName: { type: String, required: true},
    ArtistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
  },
  { collection: "albums" }
);
export default schema;
