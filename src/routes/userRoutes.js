import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const routes = new Router();

routes.post('/', UserController.create);
routes.get('/', UserController.index);

export default routes;
