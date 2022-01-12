import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Graduate, Institution, Learner } from '../models/graduate';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getLearner(): Observable<Learner>{
    return this.http.get<Learner>(`${this.baseUrl}/learner`);
  }

  getInstitution(): Observable<Institution>{
    return this.http.get<Institution>(`${this.baseUrl}/institution`);
  }
}

