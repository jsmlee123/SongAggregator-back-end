import { findSongById } from "../songs/dao.js";
import { findUserById } from "../users/dao.js";
import * as dao from "./dao.js";

function LikesRoutes(app) {
  const createUserLikesSong = async (req, res) => {
    const { userId, songId } = req.params;

    const likeObj = { UserId: userId, SongId: songId};
    let like = await dao.findLikeBySongUser(likeObj); 
    if (like) {
      res.status(403).send("User already liked song!");
    }

    like = await dao.createUserLikes(likeObj);
    res.json(like);
  };

  const deleteUserLikesSong = async (req, res) => {
    const { userId, songId } = req.params;
    const status = await dao.deleteUserLikes(userId, songId);
    res.json(status);
  };
  const findUsersSongsLikes = async (req, res) => {
    const { songId } = req.params;
    const userIds = await dao.findUsersSongLikes(songId);
    const users = [];
    for (let i = 0; i < userIds.length; i +=1){
      users.push(await findUserById(userIds[i].UserId));
    }
    
    res.json(users);
  };
  const findSongsLikedByUser = async (req, res) => {
    const { userId } = req.params;
    const songIDs = await dao.findSongsUserLikes(userId);
    const songs = [];
    
    for (let i = 0; i < songIDs.length; i +=1){
      songs.push(await findSongById(songIDs[i].SongId));
    }

    res.json(songs);
  };

  const getUserLike = async (req, res) => {
      const { songId, userId } = req.params;
      try {
        const like = await dao.findLikeBySongUser({SongId: songId, UserId: userId});
        res.json(like);
      } catch (e) {
        res.status(400).send(e);
      }
  };

  app.post("/api/likes/:songId/:userId", createUserLikesSong);
  app.delete("/api/likes/:songId/:userId", deleteUserLikesSong);
  app.get("/api/likes/:songId/:userId", getUserLike);
  app.get("/api/users/likes/song/:songId", findUsersSongsLikes);
  app.get("/api/songs/users/likes/:userId", findSongsLikedByUser);
}

export default LikesRoutes;
