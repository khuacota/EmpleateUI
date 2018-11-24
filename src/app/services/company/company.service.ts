import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../http-error-handler.service';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { Company } from '../../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService {

  constructor(httpClient: HttpClient, errorHandler: HttpErrorHandlerService) {
    super(
      httpClient,
      errorHandler,
      'empresas'
    );
  }

  public postEmpresa(data: Company): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${this.endpoint}`, data).pipe(
      catchError(this.errorHandler.handleError)
    );
  }
}
