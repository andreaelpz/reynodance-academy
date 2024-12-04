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
      this.registrationID = params['id'];
    })
  }

  onSubmit() {
    const credentials = { username: this.username, password: this.password };
    
    this.http.post(`http://localhost:8080/api/create-username-password/${this.registrationID}`, credentials)
      .subscribe(response => {
        // TODO: add a success message----------------
      }, error => {
        console.error('Error during registration:', error);
      });
  }
}
