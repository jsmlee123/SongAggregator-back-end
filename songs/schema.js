import mongoose, { SchemaType } from "mongoose";

const schema = mongoose.Schema(
  {
    SongName: { type: String, required: true},
    ArtistName: {type: String, required: true},
    SongDescription: { type: String, default: "" },
    DateCreated: { type: Date, required: false },
    SongURL: { type: String, required: false},
    ImageURL: { type: String, required: false},
    AlbumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "albums",
      required: false
    },
    ArtistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: false
  },
  },
  { collection: "songs" }
);

schema.index({ SongName: 1, ArtistName: 1 }, { unique: true });
export default schema;
