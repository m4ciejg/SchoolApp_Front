import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ViewTeachersComponent } from './view-teachers/view-teachers.component';
import { UpdateTeachersComponent } from './update-teachers/update-teachers.component';
import { TeacherAddGradesComponent } from './teacher-home/teacher-add-grades/teacher-add-grades.component';

const routes: Routes = [
  {path:'', component: HomeComponent}, //default component to display
  {path:'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  //secretary, headMaster
  {path:'viewUsers', component: ViewUserComponent, canActivate:[AuthGuardService]},
  {path:'viewTeacher', component: ViewTeachersComponent, canActivate:[AuthGuardService]},
  {path:'addUser', component: AddUserComponent, canActivate:[AuthGuardService]},
  {path:'addTeacher', component: AddTeacherComponent, canActivate:[AuthGuardService]},
  {path:'updateUser',component: UpdateUserComponent, canActivate:[AuthGuardService]},
  {path:'updateTeacher', component: UpdateTeachersComponent, canActivate:[AuthGuardService]},
  //Student
  {path:'studentHome', component:StudentHomeComponent, canActivate:[AuthGuardService]},
  //Teacher
  {path:'teacherHome', component:TeacherHomeComponent, canActivate:[AuthGuardService]},
  {path:'teacherAddGrades', component:TeacherAddGradesComponent, canActivate:[AuthGuardService]},
  //NotFound
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
