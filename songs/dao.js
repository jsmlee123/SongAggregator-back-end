import model from "./model.js";

export const findAllSongs = () => model.find();
export const findSongById = (id) => model.findById(id); 
export const createSong = (song) => model.create(song);
export const updateSong = (sid, song) =>
  model.updateOne({ _id: sid }, { $set: song });
export const deleteSong = (sid) => model.deleteOne({ _id: sid });