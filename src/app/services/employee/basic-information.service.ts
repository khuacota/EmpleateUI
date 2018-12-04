import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../http-error-handler.service';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class BasicInformationService extends BaseService {

  constructor(httpClient: HttpClient, errorHandler: HttpErrorHandlerService) {
    super(
      httpClient,
      errorHandler,
      'empleados'
    );
  }

  public getFilterEmployees(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}`, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  
}
