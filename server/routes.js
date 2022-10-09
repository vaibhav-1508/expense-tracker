import express from "express";
import * as authCtrl from "./controllers/auth-ctrl.js";
import * as expenseCtrl from "./controllers/expense-ctrl.js";

const Router = express.Router();

// Auth Routes
Router.post("/auth/in", authCtrl.sign_in);
Router.post("/auth/up", authCtrl.sign_up);
Router.get("/auth/token/:token", authCtrl.token);

// Expense Routes
Router.get("/expense/get/:user", expenseCtrl.get_expenses);
Router.post("/expense/set", expenseCtrl.set_expenses);

export default Router;