import * as dao from "./dao.js";

// let currentUser = null;

function SongRoutes(app) {
  const findAllSongs = async (req, res) => {
    const songs = await dao.findAllSongs();
    res.json(songs);
  };

  const addSong = async (req, res) => {
    const songObj = {};

    songObj["SongName"] = req.body["SongName"];
    songObj["ArtistId"] = req.body["ArtistId"];
    if ("SongDescription" in req.body) {
      songObj["SongDescription"] = req.body["SongDescription"]
    }
    if ("DateCreated" in req.body) {
      songObj["DateCreated"] = req.body["DateCreated"]
    }
    if ("SongURL" in req.body) {
      songObj["SongURL"] = req.body["SongURL"]
    }

    const song = await dao.createSong(songObj);
 
    res.json(song);
  };

  const updateSong = async (req, res) => {
    const { id } = req.params;
    const song = req.body;
    const status = await dao.updateSong(id, song);
    res.json(status);
  };

  const deleteSong = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteSong(id);
    res.json(status);
  }


  app.post("/api/songs", addSong);
  app.get("/api/songs", findAllSongs);
  app.put("/api/songs/:id", updateSong);
  app.delete("/api/songs/:id", deleteSong);
}

export default SongRoutes;
