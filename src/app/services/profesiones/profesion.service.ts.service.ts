import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../http-error-handler.service';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfesionService extends BaseService {

  constructor(httpClient: HttpClient, errorHandler: HttpErrorHandlerService) {
    super(
      httpClient,
      errorHandler,
      'profesiones'
    );
  }
  public getProfesionalesByProfesion(name: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/${name}`).pipe(
      catchError(this.errorHandler.handleError)
    );
  }
}
