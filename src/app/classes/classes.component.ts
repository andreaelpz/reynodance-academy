import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  classes = [
    {
      "class": "AERIAL SILKS",
      "summary": "A class where participants perform acrobatics while suspended from fabric silks. It combines strength, flexibility, and artistry for a unique aerial experience."
    },
    {
      "class": "BALLET",
      "summary": "A classical dance class focusing on precision, posture, and graceful movements. Ballet is the foundation for many dance styles and emphasizes discipline and technique."
    },
    {
      "class": "GYMNASTICS",
      "summary": "A dynamic class that teaches tumbling, balance, and acrobatics. It builds strength, flexibility, and coordination for all skill levels."
    },
    {
      "class": "HIP-HOP",
      "summary": "A high-energy dance class featuring urban and street-style movements. It focuses on rhythm, creativity, and self-expression to upbeat music."
    },
    {
      "class": "JAZZ",
      "summary": "An energetic and versatile dance style blending traditional and modern techniques. Jazz emphasizes dynamic movements, flexibility, and performance skills."
    },
    {
      "class": "LATIN RHYTHMS",
      "summary": "A vibrant class celebrating Latin dance styles like salsa, bachata, and merengue. It’s perfect for improving rhythm, coordination, and having fun."
    },
    {
      "class": "TAP",
      "summary": "A rhythmic dance class where students use tap shoes to create percussive sounds. It combines dance with musicality and expressive footwork."
    }
  ]
  
}
