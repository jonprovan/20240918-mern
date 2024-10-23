import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

// using a class-based interceptor and not a functional one
// because we need dependencies (only possible in class-based)
// ng g interceptor <name> --functional=false
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token: string = '';

  constructor(private tokenService: TokenService) {
    this.tokenService.token.subscribe(value => {
      this.token = value;
      console.log(`Current Interceptor Token Value: ${this.token}`);
    })
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // the functionality inside a class-based interceptor
    // is basically the same as a functional one
    let newRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.token}`)
    })
    
    return next.handle(newRequest);
  }
}
