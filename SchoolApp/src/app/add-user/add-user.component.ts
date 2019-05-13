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
    username: '',
    pesel: '',
    phoneNumber:'',
    address:'',
    email:''
  };

  login: LoginAndPassword = {
    id:0,
    username:'',
    user_password:''
  };


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  send(){
    this.apiService.addUser(this.model).subscribe(
      res => {
          alert("Użytkownik został dodany do bazy danych");
          //location.reload();
      },
      err => {
        alert("Error while sending value");
      }
    );
} 

sendToLoginPasswordEntity(){
  this.apiService.addLoginAndPassword(this.login).subscribe(
    res => {
     // location.reload(); //reload page
      alert("Konto uzytkownika zostało utworzone")
      location.reload();
    },
    err => {
      alert("Sth go wrong");
    }
  );
}

 
 //wypisz(event: any){
   //alert(this.model.occupation);
 //}

}
