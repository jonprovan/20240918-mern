import { Component } from '@angular/core';
import { Sale } from '../models/sale'; // importing the Sale class
import { CommonModule } from '@angular/common';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule], // common module import for older functionality
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  // must inject the http service here to have access to its methods
  constructor(private httpService: HttpService) {
    this.getAllSales();
    this.getAllSalespersonIds();
  }

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

  sales: Sale[] = [];
  salespersonIds: number[] = [];

  // these variables will hold our create form values
  // each is mapped to a form input
  // changing the form changes the values, and changing the values changes the form
  customerFirstName: string = '';
  customerLastName: string = '';
  date: string = '';
  total: number = 0;
  salespersonId: number = this.salespersonIds[0];

  // for the update form
  originalId: number = 0;
  idUpdate: number = 0;
  customerFirstNameUpdate: string = '';
  customerLastNameUpdate: string = '';
  dateUpdate: string = '';
  totalUpdate: number = 0;
  salespersonIdUpdate: number = this.salespersonIds[0];

  // get all
  getAllSales() {
    // make the request
    this.httpService.getAllSales().subscribe(data => {
      let tempSales: Sale[] = [];
      if(data.body)
        for(let sale of data.body) {
          tempSales.push(new Sale(sale.id,
                                  sale.customer_first_name,
                                  sale.customer_last_name,
                                  sale.date.substring(0,10),
                                  sale.total,
                                  sale.salesperson_id))
        }
      this.sales = tempSales;
    })
  }

  getAllSalespersonIds() {
    this.httpService.getAllSalespeople().subscribe(data => {
      this.salespersonIds = [];
      if(data.body)
        for (let sp of data.body)
          this.salespersonIds.push(sp.id);
    })
  }

  // creating a sale
  createSale() {
    let newSale = new Sale(0, 
                           this.customerFirstName,
                           this.customerLastName,
                           this.date,
                           this.total,
                           this.salespersonId);

    this.httpService.addSale(newSale).subscribe(data => {
      console.log(data.body);
      this.getAllSales();
      this.getAllSalespersonIds();
    })
  }

  // sending our sale data to the update form
  sendToUpdate(sale: Sale) {
    this.originalId = sale.id;
    this.idUpdate = sale.id;
    this.customerFirstNameUpdate = sale.customer_first_name;
    this.customerLastNameUpdate = sale.customer_last_name;
    this.dateUpdate = sale.date;
    this.totalUpdate = sale.total;
    this.salespersonIdUpdate = sale.salesperson_id;
  }

  // actually updating a record
  updateSale() {
    let updatedSale = new Sale(this.idUpdate, 
                               this.customerFirstNameUpdate,
                               this.customerLastNameUpdate,
                               this.dateUpdate,
                               this.totalUpdate,
                               this.salespersonIdUpdate);

      this.httpService.updateSale(this.originalId, updatedSale).subscribe(data => {
        console.log(data.body);
        this.getAllSales();
        this.getAllSalespersonIds();
      })
  }

  // removing a sale from the DB
  deleteSale(id: number) {
    this.httpService.deleteSale(id).subscribe(data => {
      console.log(data);
      this.getAllSales();
      this.getAllSalespersonIds();
    })
  }

}
