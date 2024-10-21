import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// to use this easily as a guard in our controllers
// we extend this class, linking it via 'local' to our matchingly-named local.strategy.ts
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
