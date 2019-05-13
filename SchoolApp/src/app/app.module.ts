import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { NotFoundComponent } from './not-found/not-found.component'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BasicAuthHttpInterceptorService } from './services/basic-auth-http-interceptor.service';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
//import { FontAwesome} from './node_modules/FontAwesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ViewUserComponent,
    NotFoundComponent,
    AddUserComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UpdateUserComponent,
    StudentHomeComponent,
    TeacherHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService,
  {
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
