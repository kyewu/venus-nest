import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  getUserData(): string {
    return 'User data';
  }
}
