import { Component, OnInit } from '@angular/core';
import { LoginAndPassword } from '../model/login-and-password';
import { ApiService } from '../services/api.service';
import { Teachers } from '../model/teachers';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  model: Teachers = {
    id: 0,
    name: '',
    surname: '',
    pesel: '',
    phoneNumber:'',
    address:'',
    email:''
  };

  login: LoginAndPassword = {
    id: 0,
    username:'',
    user_password:'',
    grade:'',
    comment:''
  };


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  send(){
    this.apiService.addTeacher(this.model).subscribe(
      res => {
          alert("Użytkownik został dodany do bazy danych z informacjami");
          //location.reload();
      },
      err => {
        alert("Nie udało się dodać użytkownika do bazy danych");
      }
    );
} 

sendToLoginPasswordEntity(){
  this.apiService.addLoginAndPassword(this.login).subscribe(
    res => {
     // location.reload(); //reload page
      alert("Konto uzytkownika zostało utworzone")
      //location.reload();
    },
    err => {
      alert("Nie udało się utworzyć konta");
    }
  );
}

}