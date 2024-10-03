import { Component } from '@angular/core';
import { DataPassService } from '../services/data-pass.service';

@Component({
  selector: 'app-favorite-salesperson',
  standalone: true,
  imports: [],
  templateUrl: './favorite-salesperson.component.html',
  styleUrl: './favorite-salesperson.component.css'
})
export class FavoriteSalespersonComponent {

    favoriteSalesperson: string = '';

    // in order to have access to the service passing the data
    // we have to inject the service
    constructor(private dataPass: DataPassService) {
      // assigning the value directly doesn't work
      // it only happens once and doesn't see the changes
      // this.mockFave = dataPass.favoriteSalesperson;

      // if you have a single argument in subscribe()
      // it's a callback function that does something with the updated data
      this.dataPass.favoriteSalespersonObservable.subscribe(data => {
        this.favoriteSalesperson = data;
      });
    }

}
