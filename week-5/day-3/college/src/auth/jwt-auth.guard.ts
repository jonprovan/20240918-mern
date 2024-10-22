import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

// to use this easily as a guard in our controllers
// we extend this class, linking it via 'jwt' to our matchingly-named jwt.strategy.ts
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    // a reflector gives us information about the overall context of the requested action
    // we'll use it to access Decorator metadata for the method and/or class
    constructor(private reflector: Reflector) {
        super();
    }

    // the ExecutionContext is the environment for the method's execution (class, type, etc.)
    canActivate(context: ExecutionContext) {
        const publiclyAccessible = this.reflector.getAllAndOverride('public', [ context.getHandler(), context.getClass() ]);

        if (publiclyAccessible)
            return true;

        return super.canActivate(context);
    }

}