import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboradComponent } from './client-dashborad.component';

describe('ClientDashboradComponent', () => {
  let component: ClientDashboradComponent;
  let fixture: ComponentFixture<ClientDashboradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDashboradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
