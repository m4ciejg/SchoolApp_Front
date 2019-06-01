import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddGradesComponent } from './teacher-add-grades.component';

describe('TeacherAddGradesComponent', () => {
  let component: TeacherAddGradesComponent;
  let fixture: ComponentFixture<TeacherAddGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAddGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAddGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
