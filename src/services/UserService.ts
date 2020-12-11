import { getRepository, Repository } from 'typeorm';

import User from '../database/models/User';

export default class UserService {
  static repository(): Repository<User> {
    return getRepository(User);
  }

  static async getAll(): Promise<User[]> {
    const users = await this.repository().find();
    return users;
  }

  static async getByEmail(email: string): Promise<User> {
    const user = await this.repository().findOne({ where: { email } });

    if (!user) {
      throw new Error('Non-existing user');
    }

    return user;
  }

  static async create(obj: User): Promise<User> {
    const { email } = obj;

    const userExists = await this.repository().findOne({ where: { email } });

    if (userExists) {
      throw new Error('Existing user');
    }

    const user = await this.repository().save(obj);
    return user;
  }
}
