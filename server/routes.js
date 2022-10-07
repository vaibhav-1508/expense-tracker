import express from "express";
import * as authCtrl from "./controllers/auth-ctrl.js";

const Router = express.Router();

// Auth Routes
Router.post("/auth/sign_in", authCtrl.sign_in);
Router.post("/auth/sign_up", authCtrl.sign_up);

export default Router;