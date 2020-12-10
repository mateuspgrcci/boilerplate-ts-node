import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', UserController.getAll);
routes.get('/:email', UserController.getByEmail);

routes.post('/', UserController.create);

export default routes;
