import { Injectable } from '@angular/core';
import { CanActivate ,Router, ActivatedRouteSnapshot, RouterStateSnapshot, RouterLink } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private _authService: AuthenticationService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.isUserLoggedIn()) {
        return true;
    }
    this._router.navigate(['/login']);
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }
}
