import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  registrationID: string = '';

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private http: HttpClient) {}

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.registrationID = params['regID'];
    })
  }

  onSubmit() {
    const credentials = { username: this.username, password: this.password };
    
    // Send to the backend to create the username/password and move to users
    this.http.post(`http://localhost:8080/api/create-username-password/${this.registrationID}`, credentials)
      .subscribe(response => {
        // Handle the response (e.g., show success message)
        // TODO: add a success message----------------
      }, error => {
        console.error('Error during registration:', error);
      });
  }
}
