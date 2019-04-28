import { Component, OnInit } from '@angular/core';
import { StudentsTeachers } from '../model/students-teachers';
import { ApiService } from '../services/api.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  users: StudentsTeachers[] = [];
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
        alert("Shit happend");
      } 
    );
  }
  updateUsers(updatedUser: StudentsTeachers){
    this.apiService.addUser(updatedUser).subscribe(
      res => {
         
      },
      err => {
        alert("Error while sending value");
      }
    );
  }

  deleteUser(user: StudentsTeachers){
    if(confirm("Are you sure you want to delete user?")){
      this.apiService.deleteUser(user.id).subscribe(
        res => {
          let indexOfUser = this.users.indexOf(user);
          this.users.splice(indexOfUser, 1);
        },
        err => {
          alert("Something go wrong!");
        }
      );
    }
  }
}
