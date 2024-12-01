import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    this.authService.login(this.username, this.password).subscribe({
    next: (response) => {
      const role = this.authService.getRole();
      if (role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (role === 'student') {
        this.router.navigate(['/student']);
      } else {
        console.error('Unknown role:', role);
      }
    },
    error: (err) => {
      console.error('Login failed', err);
    },
  });
  }
  
}
