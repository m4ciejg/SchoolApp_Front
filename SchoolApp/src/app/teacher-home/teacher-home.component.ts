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
