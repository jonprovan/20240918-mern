import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // don't forget to provide HttpClient in app.config.ts!!
  constructor(private http: HttpClient) {
    this.getAllSalespeople().subscribe(data => {
      console.log(data);
    })
  }

  // we can write methods here that make HTTP calls of any type
  
  // to get all salespeople
  getAllSalespeople(): Observable<any> {
    // first param = URL for the request
    // second param = what data you want to observe from the response
    return this.http.get('http://localhost:8080/sale', { observe: 'response' });
  }
}
