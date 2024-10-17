import { Request, Response, NextFunction } from "express";

// this is functional middleware
// it does not require creating an entire class
// however, it cannot have dependencies via injection
// but it is cleaner and simpler for basic functionality
export function lumberjack2(req: Request, res: Response, next: NextFunction) {
  console.log('////////// LOGGER 2 ACTIVATED //////////');
  next();
}
