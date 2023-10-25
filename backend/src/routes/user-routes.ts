import { Router } from "express";
import { getAllUsers } from '../controllers/user-controllers.js';
import { get } from "http";

const userRoutes = Router();

userRoutes.get("/", getAllUsers)

export default userRoutes;
