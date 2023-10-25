import { Router } from "express";
import { getAllUsers, userSignup } from '../controllers/user-controllers.js';
// import { get } from "http";

const userRoutes = Router();

userRoutes.get("/", getAllUsers)
userRoutes.post("/signup", userSignup)

export default userRoutes;
