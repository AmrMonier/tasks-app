import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

const routes = new Router();

routes.post("/", TaskController.create);
routes.get("/", TaskController.index);
routes.get("/:id", TaskController.read);
routes.put("/:id", TaskController.update);
routes.delete("/:id", TaskController.delete);

export default routes;
