import { Component } from '@angular/core';
import { Sale } from '../models/sale'; // importing the Sale class
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule], // common module import for older functionality
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  // in TypeScript, we ideally give our variables a type
  // once we do, that variable can only hold values of that type
  // you must import the external Sale class to make this work
  mockSale: Sale = new Sale(6, 'Gloria N.', 'Excelsis', '1910-06-12', 100000.00, 3);

  mockSales: Sale[] = [
    new Sale(6, 'Gloria N.', 'Excelsis', '1910-06-12', 100000.00, 3),
    new Sale(21, 'James', 'Jamerson', '1955-09-30', 250000.00, 5),
    new Sale(45, 'Margaret', 'Cloink', '2011-12-04', 50000.00, 3),
    new Sale(167, 'Alfonso', 'Ribiera', '1977-05-15', 525000.00, 3)
  ];

  // the type after <method name>: is the return type of this method
  addMockSale(): void {
    this.mockSales.push(new Sale(555, 'Edna', 'Mode', '1999-01-01', 1000000.00, 11));
  }

}
