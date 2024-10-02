import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Salesperson } from '../models/salesperson';

@Component({
  selector: 'app-salesperson',
  standalone: true,
  imports: [],
  templateUrl: './salesperson.component.html',
  styleUrl: './salesperson.component.css'
})
export class SalespersonComponent {

  // to get data from the parent, we need to load Salesperson info
  // into a local variable via the @Input() decorator
  @Input() salesperson: Salesperson = new Salesperson(0,'','','','',0);

  // @Output sends data up to the parent via event emitter
  // you can include a "message" per event emitted of the type in the <>
  @Output() deleteSalespersonEvent = new EventEmitter<string>();

  @Output() tenPercentRaiseEvent = new EventEmitter<number>();

  tenPercentRaise() {
    this.tenPercentRaiseEvent.emit(Math.floor(this.salesperson.salary * 0.1));
  }

  // this method runs when clicking the button
  // it will send whatever's in the emit() parentheses as the "message"
  deleteSalesperson() {
    this.deleteSalespersonEvent.emit('Test Message...');
  }

}