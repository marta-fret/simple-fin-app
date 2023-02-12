import { IUsersDataDTO } from './types';
import usersData from './mock-users.json';

export class UsersService {
  async getUsers(): Promise<IUsersDataDTO[]> {
    return Promise.resolve(
      usersData.data.collection as unknown as IUsersDataDTO[],
    );
  }
}
