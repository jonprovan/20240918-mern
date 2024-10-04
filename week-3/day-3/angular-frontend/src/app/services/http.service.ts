import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';
import { Salesperson } from '../models/salesperson';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // don't forget to provide HttpClient in app.config.ts!!
  constructor(private http: HttpClient) {
    // this.getAllSales().subscribe(data => {
    //   console.log(data);
    // })
  }

  baseURL: string = 'http://localhost:8080/';

  // we can write methods here that make HTTP calls of any type
  
  /**
   * SALESPERSON REQUESTS
   */

  // getting all salespeople
  getAllSalespeople(): Observable<HttpResponse<Salesperson[]>> {
    return this.http.get<Salesperson[]>(this.baseURL + 'salesperson', { observe: 'response' });
  }

  // delete a salesperson
  // this method must take in a number, then use it in the URL
  deleteSalesperson(id: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>(this.baseURL + 'salesperson/' + id, { observe: 'response' });
  }

    /**
   * SALE REQUESTS
   */

  // to get all sales
  getAllSales(): Observable<HttpResponse<Sale[]>> {
    // first param = URL for the request
    // second param = what data you want to observe from the response
    return this.http.get<Sale[]>(this.baseURL + 'sale', { observe: 'response' });
  }

  // add a sale
  // this method requires a body as the second parameter
  // even if you don't use the body in the backend
  // you still need to include an empty object in the request
  addSale(newSale: Sale): Observable<HttpResponse<Sale>> {
    return this.http.post<Sale>(this.baseURL + 'sale', newSale, { observe: 'response' });
  }

  // update a sale
  updateSale(id: number, updatedSale: Sale): Observable<HttpResponse<Sale>> {
    return this.http.put<Sale>(this.baseURL + 'sale/' + id, updatedSale, { observe: 'response' });
  }

  // delete a sale
  deleteSale(id: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>(this.baseURL + 'sale/' + id, { observe: 'response' });
  }
}
