import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../http-error-handler.service';
import { Empresa } from '../../models/empresa';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService extends BaseService {

  constructor(httpClient: HttpClient, errorHandler: HttpErrorHandlerService) {
    super(
      httpClient,
      errorHandler,
      'Empresa'
    );
  }

  public postEmpresa(data: Empresa): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${this.endpoint}`, data).pipe(
      catchError(this.errorHandler.handleError)
    );
  }
}
