import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoginAndPassword } from '../model/login-and-password';
import { LoginComponent } from '../login/login.component';
import { students } from '../model/students';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  users: students[] = []
  grades: LoginAndPassword[] = []


  constructor(private authentication: AuthenticationService,
              private router: Router,
              private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers()
    this.getAllGrades()
  }


  private getAllUsers(){
    this.apiService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err =>{
        alert("Nie udało się pobrać uczniów");
      } 
    );
  }

  private getAllGrades(){
    this.apiService.getLoginandPassword().subscribe(
      res => {
        this.grades = res;
        console.log(res)
      },
      err => {
        alert("Nie udało się załadować ocen")
      }
    );
  }

  updateGrade(updateGrades: LoginAndPassword){
    this.apiService.addLoginAndPassword(updateGrades).subscribe(
      res => {   
        console.log(res)
      },
      err => {
        alert("Błąd podczas modyfikacji ocen");
      }
    );
  }

  updateUser(updateUser: students){
    this.apiService.addUser(updateUser).subscribe(
      res => {   
        console.log(res)
      },
      err => {
        alert("Błąd podczas modyfikacji ocen");
      }
    );
  }
}
