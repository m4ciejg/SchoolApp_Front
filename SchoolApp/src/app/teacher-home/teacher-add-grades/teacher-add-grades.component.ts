import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/model/students';
import { LoginAndPassword } from 'src/app/model/login-and-password';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-teacher-add-grades',
  templateUrl: './teacher-add-grades.component.html',
  styleUrls: ['./teacher-add-grades.component.css']
})
export class TeacherAddGradesComponent implements OnInit {
  users: students[] = []
  grade: LoginAndPassword[] = []
  constructor(private authentication: AuthenticationService,
              private router: Router,
              private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers()
  }


  public getAllUsers(){
    this.apiService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err =>{
        alert("Nie udało się pobrać uczniów");
      } 
    );
  }

}
