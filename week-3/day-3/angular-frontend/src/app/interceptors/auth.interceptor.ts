import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

// this is a functional interceptor
// it intercepts all outgoing requests and processes them before they leave
// we're going to use it to tack on basic auth information
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // encoding our login information
  let authString = 'Basic ' + btoa('pufferfish23:dontmakemeangry');

  let newReq = req.clone({
    headers: req.headers.set('Authorization', authString)
  })

  return next(newReq);
};
