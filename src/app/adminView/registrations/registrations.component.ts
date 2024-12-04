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

  get pendingRegistrations() {
    return this.registrations.filter(registration => registration.status === 'PENDING');
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

  acceptRegistration(id: string): void {
    this.adminService.acceptRegistration(id, this.username, this.password).subscribe(
      (response) => {
        alert('Registration accepted and email sent');
        console.log(response);
        this.fetchRegistrations(); 
      },
      (error) => {
        console.error('Error accepting registration', error);
      }
    );
  }

  rejectRegistration(id: string): void {
    this.adminService.rejectRegistration(id, this.username, this.password).subscribe(
      (response) => {
        alert('Registration rejected and deleted');
        console.log(response);
        this.fetchRegistrations(); 
      },
      (error) => {
        console.error('Error rejecting registration', error);
      }
    );
  }

}
