import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration.models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8081/api/admin/registrations'; // URL to fetch registrations

  constructor(private http: HttpClient) { }

    // Method to fetch all registrations with Basic Authentication
    getRegistrations(username: string, password: string): Observable<Registration[]> {
    // Base64 encode 'username:password'
    const authHeader = 'Basic ' + btoa(username + ':' + password);

    // Set up headers with Authorization
    const headers = new HttpHeaders().set('Authorization', authHeader);

    // Make the HTTP GET request with the headers
    return this.http.get<Registration[]>(this.apiUrl, { headers });
  }
}