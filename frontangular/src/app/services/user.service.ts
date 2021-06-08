import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public get(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.api}/persons`, cabecera);
  }

  public setNewPerson(element: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.api}/addChild`, element, cabecera);
  }
}