import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://localhost:8080/api/data';

  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

}
