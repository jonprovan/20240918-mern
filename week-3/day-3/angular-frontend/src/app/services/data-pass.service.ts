import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// the @Injectable decorator
// tells us we can "inject" this service into whatever needs it
// this injectable is a singleton -- only one instance will ever exist
// also, the instance persists whether we're on a page that uses it or not
@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  // we can't simply store values in this way
  // if we want other components to be aware that they've changed
  // favoriteSalesperson: string = 'Service SP2';

  // a BehaviorSubject has a current state
  // when that state changes, it notifies subscribers that it has done so
  favoriteSalespersonSubject = new BehaviorSubject<string>('None selected');

  // we take our subject and create an Observable, so we can process the changes
  favoriteSalespersonObservable = this.favoriteSalespersonSubject.asObservable();

  constructor() { }

  // this method tells the subject to update to the new state
  // and emit a change notification to its Observable
  setFavoriteSalesperson(newFave: string) {
    this.favoriteSalespersonSubject.next(newFave);
  }

}
