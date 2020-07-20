import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GTicketsComponent } from './g-tickets.component';

describe('GTicketsComponent', () => {
  let component: GTicketsComponent;
  let fixture: ComponentFixture<GTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
