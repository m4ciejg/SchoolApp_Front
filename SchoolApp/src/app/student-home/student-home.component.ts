import { Component, OnInit } from '@angular/core';
import { LoginAndPassword } from '../model/login-and-password';
import { ApiService } from '../services/api.service';
import { students } from '../model/students';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  users: students[] = []
  grade: LoginAndPassword[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPersonalInfoById()
    //this.getGradeById()
  }

  getPersonalInfoById(){
    this.apiService.getUserPersonalInfoById(Number(sessionStorage.getItem('id'))).subscribe(
      res => {
        this.users = res;
      },
      err =>{
        alert("Nie udało się pobrać Twoich personalnych informacji")
      }
    );
  }
  

  /*getGradeById(){
    this.apiService.getUserById(Number(sessionStorage.getItem('id'))).subscribe(
      res => {
        this.grade = res;
      },
      err =>{
        alert("Nie udało się pobrać ocen")
      }
    );
  }*/
}
