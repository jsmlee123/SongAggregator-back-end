import model from "./model.js";

export const findAllSongs = () => model.find();
export const findSongById = (id) => model.findById(id);
export const findSongByName = (SongName) =>(
  model.find({ SongName }));
export const findSongByArtistName = (ArtistName, SongName) =>(
  model.findOne({ ArtistName, SongName }));
export const findSongsByArtistId = (aid) => 
  model.find({ ArtistId: aid });
export const createSong = (song) => 
  model.create(song);
export const updateSong = (sid, song) =>
  model.updateOne({ _id: sid }, { $set: song });
export const deleteSong = (sid) => model.deleteOne({ _id: sid });
export const findSongByAlbumId = (aid) => model.find({AlbumId: aid});
