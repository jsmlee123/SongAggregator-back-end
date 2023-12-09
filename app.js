// const express = require("express");
import session from "express-session";
import mongoose from "mongoose";
import express from "express";
import UserRoutes from "./users/routes.js";
import FollowsRoutes from "./follows/routes.js";
import LikesRoutes from "./likes/routes.js";
import cors from "cors";
import SongRoutes from "./songs/routes.js";

mongoose.connect("mongodb+srv://global:root123@cluster0.wgzjngx.mongodb.net/backend?retryWrites=true&w=majority");

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
  };
}

app.use(session(sessionOptions));

app.use(express.json());

//UserRoutes(app);
SongRoutes(app);

app.listen(4000);
