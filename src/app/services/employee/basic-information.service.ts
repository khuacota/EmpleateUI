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

  public getFilterEmployees(name: string): Observable<any> {
    let words = name.split(' ');
    let search = this.setUrlSearch(words);
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/search/?${search}`).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  public setUrlSearch(data: Array<string>) {
    let result = "";
    let searchWord = "ocupation=";
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
