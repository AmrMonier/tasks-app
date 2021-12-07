import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import authentication from '../middlewares/authentication.js';

const routes = new Router();

routes.post('/', UserController.create);
routes.get('/me', authentication.isAuthenticated, UserController.index);
routes.get('/:id', authentication.isAuthenticated, UserController.read);
routes.put('/:id', authentication.isAuthenticated, UserController.update);
routes.delete('/:id', authentication.isAuthenticated, UserController.delete);

export default routes;
