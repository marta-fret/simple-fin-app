import { IPaginated } from '../types';

export interface IUsersDataDTO {
  userId: string;
  userName: string;
}

export interface IUsersResponse {
  data: IPaginated<IUsersDataDTO>;
  timestamp: number;
}
