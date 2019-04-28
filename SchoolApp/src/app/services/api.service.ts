import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentsTeachers } from '../model/students-teachers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // private BASE_URL = "http://localhost:8080";
  private ALL_USERS_URL = "http://localhost:8080/secretary/users";

  constructor(private http: HttpClient) {

   }

   getAllUsers(): Observable<StudentsTeachers[]>{
    return this.http.get<StudentsTeachers[]>(this.ALL_USERS_URL);
   }
   
   addUser(user: StudentsTeachers): Observable<any>{
    return this.http.post(this.ALL_USERS_URL,user);
   }

   //updateUser(user: StudentsTeachers): Observable<any>{
    // return this.http.put(this.DELETE_URL, user);
  // }

}
