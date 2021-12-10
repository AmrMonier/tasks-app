import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import authentication from '../middlewares/authentication.js';
import upload from '../middlewares/multer.js';

const routes = new Router();

routes.post('/', UserController.create);
routes.get('/me', authentication.isAuthenticated, UserController.index);
routes.put('/me', authentication.isAuthenticated, UserController.update);
routes.delete('/me', authentication.isAuthenticated, UserController.delete);
routes.post('/me/avatar', authentication.isAuthenticated,upload.uploadAvatar.single('avatar'), UserController.uploadAvatar)
routes.get('/me/avatar', authentication.isAuthenticated, UserController.getAvatar)

export default routes;
