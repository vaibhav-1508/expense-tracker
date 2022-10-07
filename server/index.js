// config
import "./config/config.js";

// modules - import
import express from "express";
import http from "http";
import cors from "cors";

// files - import
import Router from "./routes.js";

// setup
const app = express();
const server = http.createServer(app);

// middlewares
app.use(cors());
app.use(express.json());
app.use(Router);

// test
app.get("/", (req, res) => res.status(200).send("Server is running!"))

// listen
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("Listening on PORT: " + PORT));
