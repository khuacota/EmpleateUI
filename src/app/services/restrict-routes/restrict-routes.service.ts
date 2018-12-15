import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RestrictRoutesService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = route.data.expectedRole;
    if ( !this.auth.isLogged()) {
      this.router.navigate(['auth/register']);
      return false;
    }
    if(!role.includes(this.auth.getUser().userRole)){
      this.router.navigate([this.auth.getUser().userRole]);
      return false;
    }
    return true;
  }
}
