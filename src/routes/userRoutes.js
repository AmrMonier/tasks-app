import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const routes = new Router();

routes.post('/', UserController.create);

export default routes;
