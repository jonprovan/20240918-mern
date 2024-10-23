import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  tokenSubject = new BehaviorSubject<string>('');
  token = this.tokenSubject.asObservable();

  updateToken(tokenValue: string) {
    // console.log(tokenValue);
    this.tokenSubject.next(tokenValue);
  }

}
