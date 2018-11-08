import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../http-error-handler.service';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { Academic } from '../../models/academic';

@Injectable({
  providedIn: 'root'
})
export class AcademicService extends BaseService  {

  constructor(public httpClient: HttpClient, public errorHandler: HttpErrorHandlerService) {
    super(
      httpClient,
      errorHandler,
      'Academic'
    );
  }

  public postAcademicInfo(data: Academic): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${this.endpoint}`,data).pipe(
      catchError(this.errorHandler.handleError)
    );
  }
}
