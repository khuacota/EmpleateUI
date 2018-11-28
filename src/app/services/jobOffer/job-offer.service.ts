import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../http-error-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { JobOffer } from '../../models/jobOffer';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService extends BaseService {

  constructor(public httpClient: HttpClient, public errorHandler: HttpErrorHandlerService) {
    super(
      httpClient,
      errorHandler,
      'Oferta'
    );
  }

  public postOfertaInfo(data: JobOffer): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${this.endpoint}`,data).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  public getOffersByCompany(name: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/${name}`).pipe(
      catchError(this.errorHandler.handleError)
    );
  }
}
