import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespeopleComponent } from './salespeople.component';

describe('SalespeopleComponent', () => {
  let component: SalespeopleComponent;
  let fixture: ComponentFixture<SalespeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalespeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalespeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
