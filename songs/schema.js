import mongoose, { SchemaType } from "mongoose";

const schema = mongoose.Schema(
  {
    SongName: { type: String, required: true},
    ArtistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    SongDescription: { type: String, required: false },
    DateCreated: { type: Date, required: false },
    SongURL: { type: String, required: false},
    AlbumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "albums",
      required: false
  }
  },
  { collection: "songs" }
);
export default schema;
