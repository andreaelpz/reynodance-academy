import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = ['studio.jpg', 'girls.jpg', 'solo.jpg'];
  currentIndex: number = 0;

  nextPic(): string{
    this.currentIndex++;

    if (this.currentIndex === this.images.length){
      
    }
  }
}
