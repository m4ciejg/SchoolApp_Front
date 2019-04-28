import { Component, OnInit } from '@angular/core';
import { StudentsTeachers } from '../model/students-teachers';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  model: StudentsTeachers = {
    id: 0,
    name: '',
    surname: '',
    occupation: '',
    pesel: '',
    phoneNumber:'',
    address:'',
    email:''
  };
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  send(){
    this.apiService.addUser(this.model).subscribe(
      res => {
          location.reload(); //reload page
          alert("User added successfully");
      },
      err => {
        alert("Error while sending value");
      }
    );

}
 //wypisz(event: any){
   //alert(this.model.occupation);
 //}

}
