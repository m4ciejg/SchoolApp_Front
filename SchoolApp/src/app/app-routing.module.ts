import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'', component: HomeComponent}, //default component to display
  {path:'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'viewUsers', component: ViewUserComponent, canActivate:[AuthGuardService]},
  {path:'addUser', component: AddUserComponent, canActivate:[AuthGuardService]},
  {path:'updateUser',component: UpdateUserComponent, canActivate:[AuthGuardService]},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
