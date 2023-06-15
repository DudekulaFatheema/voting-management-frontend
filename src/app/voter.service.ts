  import { Injectable } from '@angular/core';
   import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { async, catchError, throwError } from 'rxjs';

 @Injectable({
    providedIn: 'root'
  })
  export class VoterService {
    activeUser:any={

    };
    errorMessage:any;
   createUser(User1: any) {
     throw new Error('Method not implemented.');
   }
    
    private baseUrl = 'http://localhost:8090/voter';

   constructor(private http: HttpClient) { }

    getVoter(): Observable<any> {
      return this.http.get(`${this.baseUrl}/{voterId}`);
    }

    createVoter(voter: Object): Observable<Object> {
     return this.http.post(`${this.baseUrl}`, voter);
    }
   deleteVoter(voterId: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/delete/${voterId}`, { responseType: 'text' });
    }
    updateVoter(voterId: number, voter: Object): Observable<Object> {
      return this.http.put(`${this.baseUrl}/update/${voterId}`, voter);
    }
       getVoterList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }

  }