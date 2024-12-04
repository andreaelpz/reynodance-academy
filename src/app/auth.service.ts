import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth'; 
  private loggedIn = new BehaviorSubject<boolean>(this.isTokenAvailable());

  constructor(private http: HttpClient, private router: Router) {}

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    return new Observable((observer) => {
      this.http
        .post(`${this.baseUrl}/login`, { username, password })
        .subscribe({
          next: (response: any) => {
            const token = response.token;
            localStorage.setItem('authToken', token);
            this.loggedIn.next(true);
            observer.next(response);
          },
          error: (error) => {
            observer.error(error);
          },
        });
    });
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);
    this.router.navigate(['/sign-in']); // Redirect to login page
  }

  // Check if token is available in localStorage
  private isTokenAvailable(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Decode the JWT to extract information
  getRole(): string | null {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role; // Assuming the token contains a "role" claim
  }
}