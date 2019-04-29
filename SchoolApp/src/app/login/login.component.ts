import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  invalidLogin = false;

  constructor(private loginService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  checkLogin(){
    if(this.loginService.authenticate(this.username, this.password)){
      this.router.navigate(['/viewUsers']);
      this.invalidLogin = false;
      console.log("Udalo sie zalogowac");
    }else{
      this.invalidLogin = true;
    }
  }

}
