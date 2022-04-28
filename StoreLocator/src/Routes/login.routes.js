import express from "express";
import { loginGet, loginPost, logout } from "./../Controller/login.controller.js";
import { destroySession } from "../middlewares/session.js";

const loginRoute = express.Router();

loginRoute.get('', loginGet);

loginRoute.post('', loginPost);

export default loginRoute;