import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonDetailComponent } from './salesperson-detail.component';

describe('SalespersonDetailComponent', () => {
  let component: SalespersonDetailComponent;
  let fixture: ComponentFixture<SalespersonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalespersonDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalespersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
