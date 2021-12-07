import { Router } from "express";
import TaskController from "../controllers/TaskController.js";
import authentication from "../middlewares/authentication.js";

const routes = new Router();

routes.post("/", authentication.isAuthenticated, TaskController.create);
routes.get("/", authentication.isAuthenticated, TaskController.index);
routes.get("/:id", authentication.isAuthenticated, TaskController.read);
routes.put("/:id", authentication.isAuthenticated, TaskController.update);
routes.delete("/:id", authentication.isAuthenticated, TaskController.delete);

export default routes;
