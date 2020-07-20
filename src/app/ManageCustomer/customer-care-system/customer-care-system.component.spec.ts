import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCareSystemComponent } from './customer-care-system.component';

describe('CustomerCareSystemComponent', () => {
  let component: CustomerCareSystemComponent;
  let fixture: ComponentFixture<CustomerCareSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCareSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCareSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
