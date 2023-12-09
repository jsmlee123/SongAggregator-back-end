import model from "./model.js";

export const findAllSongs = () => model.find();
export const findSongById = (id) => model.findById(id);
export const findSongByArtistName = (artistName, song) =>
  model.findOne( { artistName, song });
export const createSong = (song) => model.create(song);
export const updateSong = (sid, song) =>
  model.updateOne({ _id: sid }, { $set: song });
export const deleteSong = (sid) => model.deleteOne({ _id: sid });
export const findSongByAlbumId = (aid) => model.find({AlbumId: aid});
