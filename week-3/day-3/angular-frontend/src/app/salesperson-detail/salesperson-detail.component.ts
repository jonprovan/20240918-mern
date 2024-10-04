import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // must import this for AR to work
import { HttpService } from '../services/http.service';
import { Salesperson } from '../models/salesperson';

@Component({
  selector: 'app-salesperson-detail',
  standalone: true,
  imports: [],
  templateUrl: './salesperson-detail.component.html',
  styleUrl: './salesperson-detail.component.css'
})
export class SalespersonDetailComponent {

  // ActivatedRoute allows us to use route parameters to control page content
  // we can enter the route directly in the URL bar
  // OR, we can route to this component from another component using the router

  // we inject an instance of ActivatedRoute here
  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.getSalespersonById();
  }

  salesperson: Salesperson = new Salesperson(0,'','','','',0);

  failedStatus: string = '';
  failedId: string = '';

  getSalespersonById() {
    // we can access the parameters of the route using this syntax
    // we're processing the results using observer arguments
    // in place of the single callback function,
    // we have an object with three properties:
    // next for a successful response (a callback function)
    // error for an error response (a callback function)
    // complete for execution after completion of the next callback function
    this.httpService.getSalespersonById(this.route.snapshot.params['id']).subscribe({
      next: data => {
                      if(data.body)
                        this.salesperson = new Salesperson(data.body.id,
                                                          data.body.first_name,
                                                          data.body.last_name,
                                                          data.body.department,
                                                          data.body.hire_date.substring(0,10),
                                                          data.body.salary);
                        console.log(this.salesperson);
      },
      error: (err) => {
        this.failedId = this.route.snapshot.params['id'];
        this.failedStatus = err.status;
      },
      complete: () => console.log('Complete block executed!')
    });
  }

}
