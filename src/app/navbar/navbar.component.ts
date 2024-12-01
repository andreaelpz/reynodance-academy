import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  isLoggedIn = this.authService.isLoggedIn;
}