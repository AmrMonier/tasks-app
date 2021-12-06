import { Router } from 'express';
import AuthenticationController from '../controllers/AuthenticationController.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/login', AuthenticationController.login)


export default routes;
