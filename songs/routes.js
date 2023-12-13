import { findUserByUsername } from "../users/dao.js";
import * as dao from "./dao.js";

function SongRoutes(app) {
  const findAllSongs = async (req, res) => {
    const songs = await dao.findAllSongs();
    res.json(songs);
  };

  const addSong = async (req, res) => {
    const songObj = {};

    songObj["SongName"] = req.body["SongName"];
    songObj["ArtistName"] = req.body["ArtistName"]

    const user = await findUserByUsername(songObj["ArtistName"]);
    if (user && user.role === "ARTIST") {
      songObj["ArtistId"] = user._id;
    }

    if ("ArtistId" in req.body) {
      songObj["ArtistId"] = req.body["ArtistId"];
    } 
    if ("ImageURL" in req.body) {
      songObj["ImageURL"] = req.body["ImageURL"];
    }
    if ("SongDescription" in req.body) {
      songObj["SongDescription"] = req.body["SongDescription"]
    }
    if ("DateCreated" in req.body) {
      songObj["DateCreated"] = req.body["DateCreated"]
    }
    if ("SongURL" in req.body) {
      songObj["SongURL"] = req.body["SongURL"]
    }

    try {
      const song = await dao.createSong(songObj);
      res.json(song);
    } catch (error) {
      const song = await dao.findSongByArtistName(songObj["ArtistName"], songObj["SongName"]);
      res.json(song)
    }
  };

  const updateSong = async (req, res) => {
    const { id } = req.params;
    const song = req.body;
    const status = await dao.updateSongBody(id, song);
    console.log(status);
    res.json(status);
  };

  const deleteSong = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteSong(id);
    res.json(status);
  }

  const findAllSongsByAlbum = async (req, res) => {
    const { aid } = req.params;
    const songs = await dao.findSongByAlbumId(aid);
    res.json(songs);
  }

  const findSongByArtistName = async (req, res) => {
    const { ArtistName, SongName } = req.params;
    const song = await dao.findSongByArtistName(ArtistName, SongName);

    res.json(song);
  }

  const findSongByName = async (req, res) => {
    const { SongName } = req.params;
    const song = await dao.findSongByName(SongName);
    res.json(song);
  }

  const findAllSongsByArtist = async (req, res) => {
      const { uid } = req.params;
      const songs = await dao.findSongsByArtistId(uid);
      res.json(songs);
  }

  const findSongByID = async (req, res) => {
    const { id } = req.params;
    const song = await dao.findSongById(id);
    res.json(song);
  }

  app.get("/api/songs/:ArtistName/:SongName", findSongByArtistName);
  app.post("/api/songs", addSong);
  app.get("/api/songs", findAllSongs);
  app.get("/api/song/:SongName", findSongByName);
  app.get("api/songs/album/:aid", findAllSongsByAlbum);
  app.get("/api/artist/songs/:uid", findAllSongsByArtist)
  app.get("/api/songs/:id", findSongByID)
  app.put("/api/songs/:id", updateSong);
  app.delete("/api/songs/:id", deleteSong);
  
  
}

export default SongRoutes;
