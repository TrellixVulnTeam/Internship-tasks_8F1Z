import express from "express";
import { loginGet, loginPost, logout } from "./../Controller/login.controller.js";

const loginRoute = express.Router();

loginRoute.get('', loginGet);

loginRoute.post('', loginPost);

export default loginRoute;