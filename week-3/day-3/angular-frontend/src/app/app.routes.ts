import { Routes } from '@angular/router';
import { SalespeopleComponent } from './salespeople/salespeople.component';
import { SalesComponent } from './sales/sales.component';
import { SalespersonDetailComponent } from './salesperson-detail/salesperson-detail.component';

// each item in the route array is a single path
// the path property is whatever's after the base URL in the browser
// the component property points to the component to load
export const routes: Routes = [
    {
        path: 'salespeople',
        component: SalespeopleComponent
    },
    {
        path: 'sales',
        component: SalesComponent
    },
    // this path sets up an ActivatedRoute parameter called id
    // we can access this from the component we link to
    {
        path: 'salesperson/:id',
        component: SalespersonDetailComponent
    }
];
