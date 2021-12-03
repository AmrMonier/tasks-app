import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const routes = new Router();

routes.post('/', TaskController.create);

export default routes;
