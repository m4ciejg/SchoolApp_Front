import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsTeachers } from '../model/students-teachers';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: StudentsTeachers[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers(){
    this.apiService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err =>{
        alert("Shit happend");
      } 
    );
  }
}
