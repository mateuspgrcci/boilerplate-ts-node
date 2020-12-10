import UserService from '../../src/services/UserService';

/* eslint-disable no-undef */
describe('User tests', () => {
  test('Get all users', async () => {
    const users = UserService.getAll();
    expect(users).toBeTruthy();
  });

  test('Get user by email', async () => {
    const users = UserService.getByEmail('teste@gmail.com');
    expect(users).toBeTruthy();
  });

  test('Create a new user', async () => {
    const users = UserService.create({ id: null, email: 'teste@gmail.com' });
    expect(users).toBeTruthy();
  });
});
