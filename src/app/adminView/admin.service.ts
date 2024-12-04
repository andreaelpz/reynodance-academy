import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration.models';
import { User } from './user.models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8081/api/admin'; 

  constructor(private http: HttpClient) { }

    getRegistrations(username: string, password: string): Observable<Registration[]> {
      const authHeader = 'Basic ' + btoa(username + ':' + password);

      const headers = new HttpHeaders().set('Authorization', authHeader);

      return this.http.get<Registration[]>(`${this.apiUrl}/registrations`, { headers });
    }

    getUsers(username: string, password: string): Observable<User[]> {
      const authHeader = 'Basic ' + btoa(username + ':' + password);

      const headers = new HttpHeaders().set('Authorization', authHeader);
       console.log("------- inside the getUsers function in admin service")
      console.log("going to the following URL:" + `${this.apiUrl}` + "/students")
      return this.http.get<User[]>(`${this.apiUrl}/students`, { headers });
    }

    acceptRegistration(id: string, username: string, password: string) {
      const authHeader = 'Basic ' + btoa(username + ':' + password);

      const headers = new HttpHeaders().set('Authorization', authHeader);

      return this.http.post(`${this.apiUrl}/accept/${id}`, {}, { headers, responseType: 'text' });
    }
  
    rejectRegistration(id: string, username: string, password: string) {
      const authHeader = 'Basic ' + btoa(username + ':' + password);

      const headers = new HttpHeaders().set('Authorization', authHeader);

      return this.http.delete(`${this.apiUrl}/reject/${id}`, { headers, responseType: 'text' });
    }



}