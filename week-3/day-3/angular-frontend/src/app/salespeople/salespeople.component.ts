import { Component } from '@angular/core';
import { Salesperson } from '../models/salesperson';
import { SalespersonComponent } from '../salesperson/salesperson.component';
import { HttpService } from '../services/http.service';
// this import is for the component with the reactive create form in it
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-salespeople',
  standalone: true,
  imports: [SalespersonComponent, ReactiveFormsComponent], // importing components used in this component's HTML
  templateUrl: './salespeople.component.html',
  styleUrl: './salespeople.component.css'
})
export class SalespeopleComponent {

  constructor(private httpService: HttpService){
    this.getAllSalespeople();
  }

  salespersonRaise(index: number, raiseAmount: number) {
    this.salespeople[index].salary += raiseAmount;
  }

  // deleting a salesperson from the DB
  // we call our getAll method INSIDE the subscribe to make sure
  // it happens AFTER the deletion has completed successfully
  deleteSalesperson(id: number) {
    console.log(`Deleting Salesperson with ID ${id}...`);

    this.httpService.deleteSalesperson(id).subscribe(data => {
      console.log(data);
      this.getAllSalespeople();
    })
  }

  salespeople: Salesperson[] = [];

  // getting all salespeople
  getAllSalespeople() {
    this.httpService.getAllSalespeople().subscribe(data => {
      let tempSalespeople: Salesperson[] = [];
      if(data.body)
        for(let sp of data.body) {
          tempSalespeople.push(new Salesperson(sp.id,
                                               sp.first_name,
                                               sp.last_name,
                                               sp.department,
                                               sp.hire_date.substring(0,10),
                                               sp.salary));
        }
      this.salespeople = tempSalespeople;
    });
  }

  // this method runs when the event comes up from the ReactiveFormsComponent
  // refer to the target method in http.service.ts
  createSalesperson(salesperson: Salesperson) {
    this.httpService.createSalesperson(salesperson).subscribe(data => {
      this.getAllSalespeople();
    })
  }

}
