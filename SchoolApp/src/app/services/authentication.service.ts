import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
export class User{
  constructor(public status: String) {

   }
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    //dyrektor = "dyrektor";
    //dyrektorhaslo = "password";
  constructor(private httpClient: HttpClient) { }

  authenticate(username, password){
    /*  Basic function without auhentication and with hard coded user and password
    if(username == "sekretarka" || username == this.dyrektor && password == "password"){
      sessionStorage.setItem('username', username);
      return true;
    }else {
      return false;
    }*/
 
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/secretary/validateLogin',{headers}).pipe(
     map(
       userData => {
        //add user to seesion storage
        sessionStorage.setItem('username',username);
        //
         let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem('username');
  }
}
