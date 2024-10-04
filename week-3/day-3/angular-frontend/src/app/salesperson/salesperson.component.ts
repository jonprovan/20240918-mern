import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Salesperson } from '../models/salesperson';
import { DataPassService } from '../services/data-pass.service'; // for our service
import { Router } from '@angular/router'; // for router navigation
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salesperson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salesperson.component.html',
  styleUrl: './salesperson.component.css'
})
export class SalespersonComponent {

  // to get data from the parent, we need to load Salesperson info
  // into a local variable via the @Input() decorator
  @Input() salesperson: Salesperson = new Salesperson(0,'','','','',0);

  // @Output sends data up to the parent via event emitter
  // you can include a "message" per event emitted of the type in the <>
  @Output() deleteSalespersonEvent = new EventEmitter<number>();

  @Output() tenPercentRaiseEvent = new EventEmitter<number>();

  favoriteSalesperson: string = '';

  // we also inject our service here to pass data up to it
  // and we inject a Router to navigate to our detail page
  constructor(private dataPass: DataPassService, private router: Router) {

    this.dataPass.favoriteSalespersonObservable.subscribe(data => {
      this.favoriteSalesperson = data;
    })

  }

  setFavoriteSalesperson() {
    // this doesn't work, because the component on the other end
    // doesn't know that the value has changed
    // it's already been assigned via the constructor
    // this.dataPass.favoriteSalesperson = this.salesperson.first_name;

    // instead, we have to update the subject
    this.dataPass.setFavoriteSalesperson(this.salesperson.first_name);
  }

  tenPercentRaise() {
    this.tenPercentRaiseEvent.emit(Math.floor(this.salesperson.salary * 0.1));
  }

  // this method runs when clicking the button
  // it will send whatever's in the emit() parentheses as the "message"
  deleteSalesperson() {
    if(this.favoriteSalesperson === this.salesperson.first_name)
      this.dataPass.setFavoriteSalesperson('None selected');

    this.deleteSalespersonEvent.emit(this.salesperson.id);
  }

  // we use the router here to navigate to the details component
  // tacking on the current salesperson's ID
  showDetails() {
    this.router.navigate([ 'salesperson/' + this.salesperson.id ]);
  }

}