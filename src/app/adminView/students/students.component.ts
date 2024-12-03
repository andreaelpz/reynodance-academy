import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Registration } from '../registration.models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  registrations: Registration[] = [];

  username = 'admin'; 
  password = 'admin123';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchRegistrations();
  }

  get acceptedStudents() {
    return this.registrations.filter(registration => registration.status === 'ACCEPTED');
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
