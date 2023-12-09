import * as dao from "./dao.js";


function AlbumRoutes(app) {
  const findAllAlbums = async (req, res) => {
    const albums = await dao.findAllAlbums();
    res.json(albums);
  };

  const addAlbum = async (req, res) => {
    const { AlbumName, ArtistId } = req.body;

    const album = await dao.createAlbum({AlbumName, ArtistId});
 
    res.json(album);
  };

  const updateAlbum = async (req, res) => {
    const { id } = req.params;
    const album = req.body;
    const status = await dao.updateAlbum(id, album);
    res.json(status);
  };

  const deleteAlbum = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteAlbum(id);
    res.json(status);
  }

  app.post("/api/album", addAlbum);
  app.get("/api/album", findAllAlbums);
  app.put("/api/album/:id", updateAlbum);
  app.delete("/api/album/:id", deleteAlbum);
}

export default AlbumRoutes;
