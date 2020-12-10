import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      return res.send(await UserService.getAll());
    } catch (error) {
      return res.status(500).send({ error: 'Something failed' });
    }
  }

  static async getByEmail(req: Request, res: Response): Promise<Response> {
    try {
      return res.send(await UserService.getByEmail(req.params.email));
    } catch (error) {
      return res.status(500).send({ error: 'Something failed' });
    }
  }

  static async create(req: Request, res: Response): Promise<Response> {
    try {
      return res.send(await UserService.create(req.body));
    } catch (error) {
      return res.status(500).send({ error: 'Something failed' });
    }
  }
}
