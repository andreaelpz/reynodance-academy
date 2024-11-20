import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = ['studio.jpg', 'girls.jpg', 'solo.jpg'];

  nextPic(): void{
    for (let i = 0; i <= this.images.length; i++){
      if (i === this.images.length){
        i = 0;
      }
    }
  }
}
