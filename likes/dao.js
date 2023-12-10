import model from "./model.js";

export const createUserLikes= (like) =>
  model.create(like);
  
export const deleteUserLikes = (userId, songId) =>
  model.deleteOne({ UserId: userId, SongId: songId });

export const findLikeBySongUser = (song) =>
  model.findOne(song);

export const findUsersSongLikes = (songId) => 
  model.find({ SongId: songId });

export const findSongsUserLikes = (userId) => 
  model.find({ UserId: userId });

