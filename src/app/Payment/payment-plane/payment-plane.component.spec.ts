import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPlaneComponent } from './payment-plane.component';

describe('PaymentPlaneComponent', () => {
  let component: PaymentPlaneComponent;
  let fixture: ComponentFixture<PaymentPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
