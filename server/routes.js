import express from "express";
import * as authCtrl from "./controllers/auth-ctrl.js";

const Router = express.Router();

// Auth Routes
Router.post("/auth/in", authCtrl.sign_in);
Router.post("/auth/up", authCtrl.sign_up);

export default Router;