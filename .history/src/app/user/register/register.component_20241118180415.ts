import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  currentPage: number = 1;
  confirmation: boolean = false;

  nextPage(): void{
    this.currentPage++;
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
