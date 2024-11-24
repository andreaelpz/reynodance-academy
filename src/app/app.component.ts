import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reynodance-academy';

  data: any;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getData().subscribe(response => {
    console.log(response);
      this.data = response.message; //store the response from the backend into the data variable
    },
    (error) => {
      console.error('Error:', error);
    }
  )
  }
}
