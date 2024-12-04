import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../user.models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  users: User[] = [];

  username = 'admin'; 
  password = 'admin123';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    console.log("------------ inside fetchUsers function) -----------")
    this.adminService.getUsers(this.username, this.password)
      .subscribe(
        (data) => {
          console.log("inside the successful case")
          this.users = data;
          console.log('Users:', data);
        },
        (error) => {
          console.log("inside the NOT successful case")
          console.error('Error fetching users', error);
        }
      );
  }

}
