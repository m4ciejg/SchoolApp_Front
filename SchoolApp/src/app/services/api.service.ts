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
  private UPDATE_USERS_URL = "http://localhost:8080/secretary/users";
  private DELETE_USERS_URL = "http://localhost:8080/secretary/users";

  constructor(private http: HttpClient) {

   }

   getAllUsers(): Observable<StudentsTeachers[]>{
    return this.http.get<StudentsTeachers[]>(this.ALL_USERS_URL);
   }
   
   addUser(user: StudentsTeachers): Observable<any>{
    return this.http.post(this.ALL_USERS_URL,user);
   }

   deleteUser(id: number): Observable<any>{
     return this.http.delete(this.DELETE_USERS_URL +"/" + id);
   }

   //updateUser(user: StudentsTeachers): Observable<any>{
    // return this.http.put(this.UPDATE_USERS_URL+'/'+ StudentsTeachers.id, user);
   //}

  // updateUser(user: StudentsTeachers): Obs
}
