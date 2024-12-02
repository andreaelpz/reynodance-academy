import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Registration } from '../registration.models';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
 
export class RegistrationsComponent implements OnInit {
  registrations: Registration[] = [];

  username = 'admin'; 
  password = 'admin123';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchRegistrations();
  }

  fetchRegistrations(): void {
    this.adminService.getRegistrations(this.username, this.password)
      .subscribe(
        (data) => {
          this.registrations = data;
          console.log('Registrations:', data);
        },
        (error) => {
          console.error('Error fetching registrations', error);
        }
      );
  }

}
