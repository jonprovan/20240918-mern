import { Component } from '@angular/core';
import { Salesperson } from '../models/salesperson';
import { SalespersonComponent } from '../salesperson/salesperson.component';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-salespeople',
  standalone: true,
  imports: [SalespersonComponent],
  templateUrl: './salespeople.component.html',
  styleUrl: './salespeople.component.css'
})
export class SalespeopleComponent {

  constructor(private httpService: HttpService){
    this.getAllSalespeople();
  }

  // this array will be fed out to child Salesperson components, one each
  // mockSalespeople: Salesperson[] = [
  //   new Salesperson(1, 'SP1', 'Last1', 'Real Estate', '2009-09-09', 123456),
  //   new Salesperson(2, 'SP2', 'Last2', 'Beachfront', '2001-02-02', 50),
  //   new Salesperson(3, 'SP3', 'Last3', 'Commercial', '2005-05-05', 99999),
  //   new Salesperson(4, 'SP4', 'Last4', 'Industrial', '2011-11-11', 8675309)
  // ]

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

}
