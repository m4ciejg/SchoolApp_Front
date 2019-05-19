import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { StudentsTeachers } from '../model/students-teachers';
import { ApiService } from '../services/api.service';
import { LoginAndPassword } from '../model/login-and-password';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  users: StudentsTeachers[] = []
  grade: LoginAndPassword[] = []
  ocena
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

  updateUsers(updatedUser: StudentsTeachers){
    this.apiService.addUser(updatedUser).subscribe(
      res => {   
      },
      err => {
        alert("Błąd podczas dodawania oceny");
      }
    );
  }

  dodajOcene(g: LoginAndPassword){
    let odp = prompt("Podaj ocenę jaką chcesz wstawić", "2")
    this.ocena = odp
  }

}
