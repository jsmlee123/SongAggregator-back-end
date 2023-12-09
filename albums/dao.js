import model from "./model.js";

export const findAllAlbums = () => model.find();
export const findAlbumById = (id) => model.findById(id); 
export const createAlbum = (album) => model.create(album);
export const updateAlbum = (aid, album) =>
  model.updateOne({ _id: aid }, { $set: album });
export const deleteAlbum = (aid) => model.deleteOne({ _id: aid });
