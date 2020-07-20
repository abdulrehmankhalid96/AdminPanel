import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashBoardComponent } from './client-dash-board.component';

describe('ClientDashBoardComponent', () => {
  let component: ClientDashBoardComponent;
  let fixture: ComponentFixture<ClientDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
