import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = 'http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}users/autenticate`, user)
  }
}
