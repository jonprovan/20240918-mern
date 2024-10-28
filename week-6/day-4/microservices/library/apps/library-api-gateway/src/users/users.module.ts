import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { USERS_CLIENT } from './constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USERS_CLIENT,
        transport: Transport.TCP,
        options: {port: 3001},
      }
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
