import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import authentication from '../middlewares/authentication.js';

const routes = new Router();

routes.post('/', UserController.create);
routes.get('/me', authentication.isAuthenticated, UserController.index);
routes.put('/me', authentication.isAuthenticated, UserController.update);
routes.delete('/me', authentication.isAuthenticated, UserController.delete);

export default routes;
