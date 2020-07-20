import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqForBranchComponent } from './req-for-branch.component';

describe('ReqForBranchComponent', () => {
  let component: ReqForBranchComponent;
  let fixture: ComponentFixture<ReqForBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqForBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqForBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
