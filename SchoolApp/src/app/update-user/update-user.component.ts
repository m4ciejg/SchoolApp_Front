import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Alert } from 'selenium-webdriver';
import { students } from '../model/students';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  users: students[] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers(){
    this.apiService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err =>{
        alert("Nie udało się załadować uczniów");
      } 
    );
  }

  updateUsers(updatedUser: students){
    this.apiService.addUser(updatedUser).subscribe(
      res => {   
        console.log(res)
      },
      err => {
        alert("Błąd bazy danych, modyfikacja nie powiodła się");
      }
    );
  }

  deleteUser(user: students){
    if(confirm("Jesteś pewny że chcesz usunąć użytkownika?")){
      this.apiService.deleteUser(user.id).subscribe(
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
