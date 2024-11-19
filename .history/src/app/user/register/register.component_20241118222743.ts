import { Component } from '@angular/core';
import { User } from '../user.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user: User = {
    fullName: '',
    dateOfBirth: null,
    age: 0,
    hasDanceExperience: false,
    mother: {
      name: '',
      address: '',
      phone: '',
    },
    father: {
      name: '',
      address: '',
      phone: '',
    },
  };
  
  currentPage: number = 1;
  confirmation: boolean = false;
  submitted: boolean = false;

  nextPage(): void{
    this.currentPage++;
    this.submitted 
  }

  previousPage(): void{
    this.currentPage--;
  }

  submitForm(): void{
    this.confirmation = true;
  }

  closeConfirmation(): void{
    this.confirmation = false;
  }
}
