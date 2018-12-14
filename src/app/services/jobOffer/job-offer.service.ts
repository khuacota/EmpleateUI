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

  public postulate(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${this.endpoint}/postulate`, data).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  public getOffersByCompany(name: string): Observable<any> {
    let words = name.split(' ');
    let search = this.setUrlSearch(words);
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/search/?${search}`).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  public getRecentOffers(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/recentOffers`).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  public setUrlSearch(data: Array<string>) {
    let result = "";
    let searchWord = "searchWord=";
    let value = "";
    if (data.length === 1) {
      return searchWord + data[0];
    }

    data.forEach(item => {
      value = searchWord + item;
      if (data[data.length - 1] === item) {
        result += value;
      }
      else {
        result += value + "&";
      }
    });

    return result;
  }
}
