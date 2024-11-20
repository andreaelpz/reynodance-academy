import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = ['studio.jpg', 'girls.jpg', 'solo.jpg'];
c

  nextPic(): string{
    this.currentIndex++;

  }
}
