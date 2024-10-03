import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FavoriteSalespersonComponent } from '../favorite-salesperson/favorite-salesperson.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, FavoriteSalespersonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
