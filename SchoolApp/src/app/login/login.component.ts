import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { StudentsTeachers } from '../model/students-teachers';
import { TransferDataService } from '../services/transfer-data.service';

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
              private router: Router, private transferData: TransferDataService) { }

  ngOnInit() {
  }

  checkLogin(){
   /* if(this.loginService.authenticate(this.username, this.password)){
      this.router.navigate(['/viewUsers']);
      this.invalidLogin = false;
      console.log("Udalo sie zalogowac");
    }else{
      this.invalidLogin = true;
    }
  }
*/
  this.loginService.authenticate(this.username, this.password).subscribe(
    data => {
      // Different routing for different user :)
      if(sessionStorage.getItem('username') == 'sekretarka'){
        this.router.navigate(["/viewUsers"]);
        this.invalidLogin = false;
      }else{
        //Routing for headMaster
        this.router.navigate(["/addUser"]);
        this.invalidLogin = false;
      }
      
    },
    err => {
      this.invalidLogin = true;
    }
  );
}

}