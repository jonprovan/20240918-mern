import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes),
              // these two lines will activate our class-based interceptor
              // any addition class-based interceptors can be added like in the second line
              // if you have functional interceptors, just include them in the array
              // like you normally would
              provideHttpClient(withInterceptorsFromDi(), withInterceptors([])),
              { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
            ]
};
