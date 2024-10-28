import { Inject, Injectable } from '@nestjs/common';
import { USERS_CLIENT } from './constant';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject(USERS_CLIENT) private userClient: ClientProxy) {}

    findAll() {
        return this.userClient.send('users.findAll', {});
    }
}
