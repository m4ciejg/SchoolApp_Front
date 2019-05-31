import { Component, OnInit } from '@angular/core';
import { Teachers } from '../model/teachers';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.component.html',
  styleUrls: ['./view-teachers.component.css']
})
export class ViewTeachersComponent implements OnInit {
  users: Teachers[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers(){
    this.apiService.getAllTeachers().subscribe(
      res => {
        this.users = res;
      },
      err =>{
        alert("Nie udało się pobrać nauczycieli");
      } 
    );
  }

}
