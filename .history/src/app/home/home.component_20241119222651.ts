import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = ['studio.jpg', 'girls.jpg', 'solo.jpg'];
  currentIndex: number = 0;

  nextPic(): number{
    this.currentIndex++;

    if (this.currentIndex === this.images.length){
      this.currentIndex = 0;
    }

    return this.currentIndex;
  }

  prevPic(): number{
    if (this.currentIndex === 0){
      this.currentIndex = this.images.length - 1;
    }

    this.currentIndex--;

    return this.currentIndex;
  }

  getImagePath(): string{
    return `/assets/images/${this.images[this.currentIndex]}`;
  }
}
