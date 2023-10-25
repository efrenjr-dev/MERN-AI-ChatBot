// import express = require("express");
import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
// import appRouter from './routes/index.js';

config();
// console.log(process.env);

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev")); // remove it in production
app.use("/api/v1", appRouter);

// app.use(appRouter)

export default app;
