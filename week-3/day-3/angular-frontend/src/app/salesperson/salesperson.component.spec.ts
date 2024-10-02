import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonComponent } from './salesperson.component';

describe('SalespersonComponent', () => {
  let component: SalespersonComponent;
  let fixture: ComponentFixture<SalespersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalespersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalespersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
