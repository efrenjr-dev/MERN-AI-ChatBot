import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash } from "bcrypt";

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        //get all users
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return res
                .status(500)
                .json({ message: "ERROR", cause: error.message });
        } else {
            console.log("Unexpected error", error);
        }
    }
};

export const userSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        //user signup
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return res
                .status(500)
                .json({ message: "ERROR", cause: error.message });
        } else {
            console.log("Unexpected error", error);
        }
    }
};