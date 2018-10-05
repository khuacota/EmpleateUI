import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  AppError, PermissionDeniedError, NotImplementedError,
  InternalServerError, NotFoundError, UnauthorizedError, BadRequest
} from '../common/http-error';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor() { }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      if (error.status === 400) {
        return throwError(new BadRequest(error.error.message));
      }
      if (error.status === 401) {
        return throwError(new UnauthorizedError(error.error.message));
      }
      if (error.status === 404) {
        return throwError(new NotFoundError(error.error.message));
      }
      if (error.status === 500) {
        return throwError(new InternalServerError(error.error.message));
      }
      if (error.status === 501) {
        return throwError(new NotImplementedError(error.error.message));
      }
      if (error.status === 550) {
        return throwError(new PermissionDeniedError(error.error.message));
      }
      return throwError(new AppError(error.error.message));
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
