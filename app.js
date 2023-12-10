// const express = require("express");
import session from "express-session";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import SongRoutes from "./songs/routes.js";
import AlbumRoutes from "./albums/routes.js";
import UserRoutes from "./users/routes.js";
import ReviewRoutes from "./reviews/routes.js";
import LikesRoutes from "./likes/routes.js";

mongoose.connect("mongodb+srv://global:root123@cluster0.wgzjngx.mongodb.net/backend?retryWrites=true&w=majority");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: false,
  };
}

app.use(session(sessionOptions));
  
app.use(express.json());

UserRoutes(app);
SongRoutes(app);
AlbumRoutes(app);
ReviewRoutes(app);
LikesRoutes(app);

app.listen(4000);
