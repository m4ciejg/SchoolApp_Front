import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TransferDataService } from '../services/transfer-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginComponent: LoginComponent;
  isHeadMaster: Boolean;

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;
  
  constructor(private authentication: AuthenticationService,
              private router: Router, private transferData: TransferDataService) { }

  ngOnInit() {
  this.isHeadMaster =  this.transferData.getData();
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  //Funtion to logout and navigate to Home page
  logOut(){
    this.authentication.logOut();
    this.router.navigate(['/home']);
    console.log("Udalo sie wylogowac");
  }

  isAdmin(){
    if(sessionStorage.getItem('username') === 'dyrektor' || sessionStorage.getItem('username') === 'sekretarka'){
      return true
    }
  }
}