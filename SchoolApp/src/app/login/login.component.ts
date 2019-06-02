import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { TransferDataService } from '../services/transfer-data.service';
import { LoginAndPassword } from '../model/login-and-password';
import { ApiService } from '../services/api.service';
import { elementStart } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  invalidLogin = false;
  loginData: LoginAndPassword[] = []

  login: LoginAndPassword = {
    id: 0,
    username:'',
    user_password:'',
    grade:''
  };

  constructor(private loginService: AuthenticationService,
              private router: Router, private transferData: TransferDataService, private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  checkLogin2(){
    for(let i = 0; i < this.loginData.length; i++){
      if((this.username == this.loginData[i].username && this.password == this.loginData[i].user_password) || (this.username == "dyrektor" && this.password == "dyrektor") || (this.username == "sekretarka" && this.password == "sekretarka")){
        sessionStorage.setItem('username', this.username)
        sessionStorage.setItem('id',String(this.loginData[i].id))
        this.invalidLogin = false
        console.log("Login accepted, Welcome" + this.username)
        console.log("Username " + this.username)
        console.log("password " + this.password)

        if(sessionStorage.getItem('username') == 'sekretarka' || sessionStorage.getItem('username') == 'dyrektor'){
          this.router.navigate(["/viewUsers"]);
          this.invalidLogin = false;
        }
        if(sessionStorage.getItem('username').startsWith('uczen')) {
          //Routing for headMaster
          this.router.navigate(["/studentHome"]); 
          this.invalidLogin = false;
        }
        if(sessionStorage.getItem('username').startsWith('nauczyciel')) {
          //Routing for headMaster
          this.router.navigate(["/teacherHome"]); 
          this.invalidLogin = false;
        }

      }else{
        this.invalidLogin = true;
      }
    }
  }

  //function to load users and password to table
  public getAllUsers(){
    this.apiService.getLoginandPassword().subscribe(
      res => {
        this.loginData = res;
        console.log(res)
        for(let i =0; i < this.loginData.length; i++){
          console.log(this.loginData[i].username)
          console.log(this.loginData[i].user_password)
        }
        console.log("get this")
      },
      err =>{
        alert("err");
      } 
    );
  }

  /*//?Check login function to use with basic header authentication
  this.loginService.authenticate(this.username, this.password).subscribe(
    data => {
      // Different routing for different user :)
      if(sessionStorage.getItem('username') == 'sekretarka' || sessionStorage.getItem('username') == 'dyrektor'){
        this.router.navigate(["/viewUsers"]);
        this.invalidLogin = false;
      }
    if(sessionStorage.getItem('username') == 'uczen') {
        //Routing for headMaster
        this.router.navigate(["/studentHome"]); 
        this.invalidLogin = false;
      }
      if(sessionStorage.getItem('username') == 'nauczyciel') {
        //Routing for headMaster
        this.router.navigate(["/teacherHome"]); //? USe array if more then 2 teachers
        this.invalidLogin = false;
      }
    },
    err => {
      this.invalidLogin = true;
    }
  );
  */
}

