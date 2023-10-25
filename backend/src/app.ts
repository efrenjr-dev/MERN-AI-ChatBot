// import express = require("express");
import express from "express";
import { config } from "dotenv";
// import appRouter from './routes/index.js';
import morgan from "morgan";
config();
// console.log(process.env);

const app = express();

//middleware
app.use(express.json());

// remove it in production
app.use(morgan("dev"));

// app.use("api/v1",appRouter);
// app.use(appRouter)

export default app;
