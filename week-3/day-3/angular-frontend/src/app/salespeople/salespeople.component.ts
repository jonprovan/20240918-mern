import { Component } from '@angular/core';
import { Salesperson } from '../models/salesperson';
import { SalespersonComponent } from '../salesperson/salesperson.component';

@Component({
  selector: 'app-salespeople',
  standalone: true,
  imports: [SalespersonComponent],
  templateUrl: './salespeople.component.html',
  styleUrl: './salespeople.component.css'
})
export class SalespeopleComponent {

  // this array will be fed out to child Salesperson components, one each
  mockSalespeople: Salesperson[] = [
    new Salesperson(1, 'SP1', 'Last1', 'Real Estate', '2009-09-09', 123456),
    new Salesperson(2, 'SP2', 'Last2', 'Beachfront', '2001-02-02', 50),
    new Salesperson(3, 'SP3', 'Last3', 'Commercial', '2005-05-05', 99999),
    new Salesperson(4, 'SP4', 'Last4', 'Industrial', '2011-11-11', 8675309)
  ]

  mockSalespersonRaise(index: number, raiseAmount: number) {
    this.mockSalespeople[index].salary += raiseAmount;
  }

  // this method should actually remove the mockSalesperson from the array
  deleteMockSalesperson(index: number, message: string) {
    console.log(message);
    console.log(`Deleting Salesperson at index ${index}...`);

    this.mockSalespeople.splice(index, 1);
  }

}
