import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { StudentsTeachers } from '../model/students-teachers';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  users: StudentsTeachers[] = [];
  
  constructor(private authentication: AuthenticationService,
              private router: Router,
              private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers()
  }

  logOut(){
    this.authentication.logOut()
    this.router.navigate(['/home'])
    console.log("Udalo sie wylogowac")
  }

  public getAllUsers(){
    this.apiService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err =>{
        alert("Shit happend");
      } 
    );
  }

  updateUsers(updatedUser: StudentsTeachers){
    this.apiService.addUser(updatedUser).subscribe(
      res => {   
      },
      err => {
        alert("Błąd podczas dodawania oceny");
      }
    );
  }
  

}
