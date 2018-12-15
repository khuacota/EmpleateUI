import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../http-error-handler.service';
import { User } from '../../models/user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{
  user: User;
  constructor(httpClient: HttpClient, errorHandler: HttpErrorHandlerService) {
    super(
      httpClient,
      errorHandler,
      'auth/signin'
    );
    this.user = null;
  }

  logout() {
    sessionStorage.removeItem("EmpleateJWT");
    this.user = null;
  }

  isLogged() {
    var token = sessionStorage.getItem("EmpleateJWT");
    if (token) {
      return true;
    }
    return false
  }

  getUser() {
    if (this.isLogged()) {
      var data = jwt_decode(sessionStorage.getItem('EmpleateJWT'));
      this.user = new User();
      this.user.userId = data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      this.user.email = data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
      this.user.userRole = data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      return this.user;
    }
    return null;
  }

  getAccessToken(): string {
    return sessionStorage.getItem('skillUpJWT');
  }
}