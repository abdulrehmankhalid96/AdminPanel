import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporstComponent } from './reporst.component';

describe('ReporstComponent', () => {
  let component: ReporstComponent;
  let fixture: ComponentFixture<ReporstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
