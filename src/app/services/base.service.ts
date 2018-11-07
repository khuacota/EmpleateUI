<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  // protected apiUrl = 'http://.azurewebsites.net';
  protected apiUrl = 'https://localhost:44313';
  private headers: HttpHeaders;
  
  constructor(
    protected httpClient: HttpClient,
    protected errorHandler: HttpErrorHandlerService,
    protected endpoint: string) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  /**
   * Makes a get request of all objects on apiUrl
   * Return Observable<any>
  */
  public getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}`, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
      );
  }

  /**
   * Makes a get request on apiUrl of a specific object with identifier
   * Return json Observable<any>
  */
  public getOne(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/${id}`, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  /**
   * Makes a post request on apiUrl of a new object
   * Return Observable<any>
  */
  public post(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${this.endpoint}`, data, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  /**
   * Makes a put request on apiUrl of an object with identifier
   * Return Observable<any>
  */
  public update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${this.endpoint}/${id}`, data, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  /**
   * Makes a delete request on apiUrl of an object with identifier
   * Return Observable<any>
  */
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${this.endpoint}/${id}`, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }
}
=======
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  // protected apiUrl = 'http://.azurewebsites.net';
  protected apiUrl = 'https://localhost:44313';
  private headers: HttpHeaders;
  
  constructor(
    protected httpClient: HttpClient,
    protected errorHandler: HttpErrorHandlerService,
    protected endpoint: string) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  /**
   * Makes a get request of all objects on apiUrl
   * Return Observable<any>
  */
  public getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}`, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
      );
  }

  /**
   * Makes a get request on apiUrl of a specific object with identifier
   * Return json Observable<any>
  */
  public getOne(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/${id}`, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  /**
   * Makes a post request on apiUrl of a new object
   * Return Observable<any>
  */
  public post(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${this.endpoint}`, data, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  /**
   * Makes a put request on apiUrl of an object with identifier
   * Return Observable<any>
  */
  public update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${this.endpoint}/${id}`, data, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  /**
   * Makes a delete request on apiUrl of an object with identifier
   * Return Observable<any>
  */
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${this.endpoint}/${id}`, { headers: this.headers }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }
}
>>>>>>> 94c6f7a0e66d810754ff3ad6f2266b6ef0f3bcc1
