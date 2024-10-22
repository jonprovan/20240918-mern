import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    // must import the PassportModule here for our strategies to work
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: 'Super Secret Secret',
      signOptions: { expiresIn: '6000s' }
    })
  ],
  // also add your strategies here
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
