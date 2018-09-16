import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdetailComponent } from './teamdetail.component';

describe('TeamdetailComponent', () => {
  let component: TeamdetailComponent;
  let fixture: ComponentFixture<TeamdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
