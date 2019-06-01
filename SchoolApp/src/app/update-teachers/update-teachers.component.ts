import { Component, OnInit } from '@angular/core';
import { Teachers } from '../model/teachers';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-teachers',
  templateUrl: './update-teachers.component.html',
  styleUrls: ['./update-teachers.component.css']
})
export class UpdateTeachersComponent implements OnInit {

  users: Teachers[] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers(){
    this.apiService.getAllTeachers().subscribe(
      res => {
        this.users = res;
      },
      err =>{
        alert("Nie udało się załadować nauczycieli");
      } 
    );
  }

  updateUsers(updatedUser: Teachers){
    this.apiService.addTeacher(updatedUser).subscribe(
      res => {   
      },
      err => {
        alert("Błąd bazy danych, modyfikacja nie powiodła się");
      }
    );
  }

  deleteUser(user: Teachers){
    if(confirm("Jesteś pewny że chcesz usunąć użytkownika?")){
      this.apiService.deleteTeacher(user.id).subscribe(
        res => {
          let indexOfUser = this.users.indexOf(user);
          this.users.splice(indexOfUser, 1);
        },
        err => {
          alert("Coś poszło nie tak!");
        }
      );
    }
  }
}
