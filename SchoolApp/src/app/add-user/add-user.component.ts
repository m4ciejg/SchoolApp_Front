import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoginAndPassword } from '../model/login-and-password';
import { students } from '../model/students';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  model: students = {
    id: 0,
    name: '',
    surname: '',
    pesel: '',
    phoneNumber:'',
    address:'',
    email:'',
    english_group:''
  };

  login: LoginAndPassword = {
    id: 0,
    username:'',
    user_password:'',
    grade:''
  };


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  send(){
    this.apiService.addUser(this.model).subscribe(
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

 
 //wypisz(event: any){
   //alert(this.model.occupation);
 //}

}
