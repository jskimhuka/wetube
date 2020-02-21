import express from "express";
//const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

//const handleHome = (req, res) => res.send("Hello from my asshole");
/*function handleHome(req, res) {
  res.send("Hello from home");
}*/

//const handleProfile = (req, res) => res.send("You aer on my profile");
/*function handleProfile(req, res) {
  res.send("You are on my profile");
}*/

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;