import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// to use this easily as a guard in our controllers
// we extend this class, linking it via 'jwt' to our matchingly-named jwt.strategy.ts
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}