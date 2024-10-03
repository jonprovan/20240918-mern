import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSalespersonComponent } from './favorite-salesperson.component';

describe('FavoriteSalespersonComponent', () => {
  let component: FavoriteSalespersonComponent;
  let fixture: ComponentFixture<FavoriteSalespersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteSalespersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteSalespersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
