import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/register'; // Replace with your actual backend endpoint

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    console.log('Payload being sent:', user);
    return this.http.post(this.apiUrl, user);
  }
}
