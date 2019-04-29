import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;
  
  constructor(private authentication: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
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
}
