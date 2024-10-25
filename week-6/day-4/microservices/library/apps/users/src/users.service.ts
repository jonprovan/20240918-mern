import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'Caroline',
      lastName: 'Ahumada'
    },
    {
      id: 2,
      firstName: 'Jon',
      lastName: 'Provan',
    },
  ];

  findAll() {
    return this.users;
  }
}
