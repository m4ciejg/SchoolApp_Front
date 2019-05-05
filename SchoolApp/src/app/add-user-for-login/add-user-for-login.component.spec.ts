import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserForLoginComponent } from './add-user-for-login.component';

describe('AddUserForLoginComponent', () => {
  let component: AddUserForLoginComponent;
  let fixture: ComponentFixture<AddUserForLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserForLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserForLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
