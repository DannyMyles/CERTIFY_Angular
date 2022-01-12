import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Employer } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }



  getUser(val: any): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/learners/api/`+ val);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/learners/api/`);
  }

  getEmployer(val: any): Observable<Employer> {
    return this.http.get<Employer>(`${this.baseUrl}/api/employers/` + val);
  }

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(`${this.baseUrl}/api/employers/`);
  }
}
