import { Component } from '@angular/core';
import { User } from '../user.models';
import { UserService } from '../user.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user: User = {
    fullName: '',
    dateOfBirth: '',
    age: 0,
    hasDanceExperience: false,
    mother: {
      name: '',
      address: '',
      email: '',
      phone: '',
    },
    father: {
      name: '',
      address: '',
      email: '',
      phone: '',
    },
  };
  
  currentPage: number = 1;
  confirmation: boolean = false;

  constructor(private userService: UserService) {}

  submitForm() {
    this.user.dateOfBirth = formatDate(this.user.dateOfBirth, 'yyyy-MM-dd', 'en-US');
    console.log(this.user.dateOfBirth);

    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
        this.confirmation = true;
      },
      (error) => {
        console.error('Error submitting form', error);
      }
    );
  }

  nextPage(): void{
    this.currentPage++;
    
  }

  previousPage(): void{
    this.currentPage--;
  }

  closeConfirmation(): void{
    this.confirmation = false;
  }
}
