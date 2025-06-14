import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service'; // Assuming UserService is defined and imported

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService, // Assuming UserService is defined and injected
  ) {}

  @Get()
  getUser(): string {
    console.log('UserController: getUser called');
    return this.userService.getUserData(); // Assuming getUserData is a method in UserService  
  }
}
