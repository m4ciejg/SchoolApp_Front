import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { students } from '../model/students';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: students[] = [];
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
        alert("Nie udało się pobrać uczniów");
      } 
    );
  }
}
