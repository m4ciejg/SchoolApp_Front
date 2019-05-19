import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { LoginAndPassword } from '../model/login-and-password';
import { ApiService } from './api.service';

export class User{

  constructor(public status: String) {

   }
}
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  //Tabel with username and password
  loginData: LoginAndPassword[] = []

  constructor(private httpClient: HttpClient,
              private apiService: ApiService) { }

    /*Function with basic header authentication (doesn't work with my rest api jdbc authentication)

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/secretary/validateLogin',{headers}).pipe(
     map(
       userData => {
        //add user to seesion storage
        sessionStorage.setItem('username',username);
        //add to session storage basic authorization
         let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )
    );
  }*/

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    console.log("Hej to ja authentication service aktualny uresname to:" + user)
    console.log(!(user === null));
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('id');
  }

  
}
