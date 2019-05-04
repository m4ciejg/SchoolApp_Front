import { Component, OnInit } from '@angular/core';
import { StudentsTeachers } from '../model/students-teachers';
import { ApiService } from '../services/api.service';
import { LoginAndPassword } from '../model/login-and-password';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  model: StudentsTeachers = {
    id: 0,
    name: '',
    surname: '',
    occupation: '',
    username: '',
    pesel: '',
    phoneNumber:'',
    address:'',
    email:''
  };

  login: LoginAndPassword = {
    id: 0,
    username: '',
    password: ''
  };
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  send(){
    this.apiService.addUser(this.model).subscribe(
      res => {
          location.reload(); //reload page
          alert("User added successfully");
      },
      err => {
        alert("Error while sending value");
      }
    );
}

  sendToLoginPasswordEntity(){
    this.apiService.addLoginAndPassword(this.login).subscribe(
      res => {

      },
      err => {
        alert("Nie udalo sie wyslac loginu");
      }
    );
  }
 //wypisz(event: any){
   //alert(this.model.occupation);
 //}

}
