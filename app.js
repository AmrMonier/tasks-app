import mongoose from "./src/middlewares/mongoose.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path'
import expressMd from "express-md";
 import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import userRoutes from "./src/routes/userRoutes.js";
import tasksRoutes from "./src/routes/tasksRoutes.js";
import authenticationRoutes from "./src/routes/authenticationRoutes.js";

mongoose
  .then(() => {
    console.log("connected to the Database");
    const app = express();
    const PORT = process.env.PORT || 5000;
    const mdRouter = expressMd({dir: __dirname, url: '/'})
    app.use(bodyParser.json());
    app.use(cors());
    app.use((req, res, next) => {
      if (process.env.ENVIROMENT === "maintainance")
        return res.status(503).json({ msg: "server under maintainance" });
      else next();
    });
    app.use("/users", userRoutes);
    app.use("/tasks", tasksRoutes);
    app.use("/auth", authenticationRoutes);
    app.use(mdRouter)
    app.use((err, req, res, next) => {
      res.status(400).json({err: err.message})
    })
    
    app.listen(PORT, () =>
      console.log(`App running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log("failed to connect to the database");
  });
