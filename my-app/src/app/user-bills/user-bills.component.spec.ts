import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBillsComponent } from './user-bills.component';

describe('UserBillsComponent', () => {
  let component: UserBillsComponent;
  let fixture: ComponentFixture<UserBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
