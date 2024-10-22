import { Injectable, NestMiddleware } from '@nestjs/common';

// middleware runs BEFORE any guards you might have
// this is class-based middleware
// as such, it can have dependencies, and you can inject providers into it
// this is NOT possible with functional middleware

@Injectable()
export class Lumberjack1Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // console.log('********** LOGGER 1 ACTIVATED **********');
    next();
  }
}
