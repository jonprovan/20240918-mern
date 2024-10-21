import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    // must import the PassportModule here for our strategies to work
    PassportModule
  ],
  // also add your strategies here
  providers: [AuthService, UserService, LocalStrategy]
})
export class AuthModule {}
