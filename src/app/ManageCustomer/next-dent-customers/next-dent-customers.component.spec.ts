import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NExtDentCustomersComponent } from './next-dent-customers.component';

describe('NExtDentCustomersComponent', () => {
  let component: NExtDentCustomersComponent;
  let fixture: ComponentFixture<NExtDentCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NExtDentCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NExtDentCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
