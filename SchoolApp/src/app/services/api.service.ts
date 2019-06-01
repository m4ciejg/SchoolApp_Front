import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { students } from '../model/students';
import { LoginAndPassword } from '../model/login-and-password';
import { Teachers } from '../model/teachers';
import { Grades } from '../model/grades';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // private BASE_URL = "http://localhost:8080";
  private ALL_STUDENTS_URL = "http://localhost:8080/api/students";
  private ALL_TEACHERS_URL = "http://localhost:8080/api/teachers"
  private ADD_LOGIN_URL = "http://localhost:8080/login";
  private ALL_GRADES_URL = "http://localhost:8080/api/grades"
  constructor(private http: HttpClient) {

   }
   //###########Students INFROMATION##################
   //method to get Students personal information 
   getAllUsers(): Observable<students[]>{
    return this.http.get<students[]>(this.ALL_STUDENTS_URL);
   }
   
   addUser(user: students): Observable<any>{
    return this.http.post(this.ALL_STUDENTS_URL,user);
   }

   deleteUser(id: number): Observable<any>{
     return this.http.delete(this.ALL_STUDENTS_URL +"/" + id);
   }
   
   getUserPersonalInfoById(id: number): Observable<any>{
     return this.http.get(this.ALL_STUDENTS_URL + "/" + id)
   }

   //##############TEACHERS INFORMATION###########
   getAllTeachers(): Observable<Teachers[]>{
    return this.http.get<Teachers[]>(this.ALL_TEACHERS_URL);
   }
   
   addTeacher(user: Teachers): Observable<any>{
    return this.http.post(this.ALL_TEACHERS_URL,user);
   }

   deleteTeacher(id: number): Observable<any>{
     return this.http.delete(this.ALL_TEACHERS_URL +"/" + id);
   }
   
   getTeacherPersonalInfoById(id: number): Observable<any>{
     return this.http.get(this.ALL_TEACHERS_URL + "/" + id)
   }

    //##############Students Grades###########
    getAllGrades(): Observable<Grades[]>{
      return this.http.get<Grades[]>(this.ALL_GRADES_URL);
     }
     
     addGrade(user: Grades): Observable<any>{
      return this.http.post(this.ALL_GRADES_URL,user);
     }
  
     deleteGrade(id: number): Observable<any>{
       return this.http.delete(this.ALL_GRADES_URL +"/" + id);
     }
     
     getGradeByUserId(id: number): Observable<any>{
       return this.http.get(this.ALL_GRADES_URL + "/" + id)
     }

   //##############LOGIN AND PASSWORD###########
   
   //method to get login and passwod from rest end point as plain text 
   getLoginandPassword():Observable<LoginAndPassword[]>{
    return this.http.get<LoginAndPassword[]>(this.ADD_LOGIN_URL);
   }

   addLoginAndPassword(login: LoginAndPassword): Observable<any>{
    return this.http.post(this.ADD_LOGIN_URL, login);
   }

   getUserById(id: number): Observable<any>{
    return this.http.get(this.ADD_LOGIN_URL +"/" + id);
  }


   //updateUser(user: StudentsTeachers): Observable<any>{
    // return this.http.put(this.UPDATE_USERS_URL+'/'+ StudentsTeachers.id, user);
   //}

  // updateUser(user: StudentsTeachers): Obs
}
