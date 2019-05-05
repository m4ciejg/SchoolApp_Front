import { Component, OnInit } from '@angular/core';
import { LoginAndPassword } from '../model/login-and-password';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-user-for-login',
  templateUrl: './add-user-for-login.component.html',
  styleUrls: ['./add-user-for-login.component.css']
})
export class AddUserForLoginComponent implements OnInit {

  model: LoginAndPassword = {
    id: 1,
    username: '',
    user_password: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  sendToLoginPasswordEntity(){
    this.apiService.addLoginAndPassword(this.model).subscribe(
      res => {
       // location.reload(); //reload page
        alert("User added")
      },
      err => {
        alert("Sth go wrong");
      }
    );
  }
}
