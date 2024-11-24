import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  pressed: boolean = false;

  questions = [
    {
      text: 'WHAT IS THE MINIMUM AGE REQUIRED TO JOIN?',
      answer:
        'Students will be accepted starting at 2 years old (boys and girls). Students will be placed and relocated by the instructor into their respective groups according to their age and knowledge of the subject.',
      pressed: false
    },
    {
      text: 'WHAT ARE THE DRESS CODE REQUIREMENTS?',
      answer: 'Students are required to wear proper dance attire as per guidelines.',
      pressed: false
    },
    {
      text: 'WHAT IS THE REFUND POLICY?',
      answer: 'Tuition is non-refundable. However, special cases will be reviewed by the administration.',
      pressed: false
    },
    {
      text: 'HOW DO I REGISTER?',
      answer:
        'You can register online through our website or visit the academy in person during office hours.',
      pressed: false
    },
    {
      text: 'ARE THERE ADDITIONAL FEES?',
      answer:
        'Yes, there may be fees for costumes, recital participation, and competitions. Details will be provided upon registration.',
      pressed: false
    },
    {
      text: 'CAN PARENTS WATCH CLASSES?',
      answer:
        'Parents are welcome during observation days, which are scheduled periodically throughout the year.',
      pressed: false
    }
  ];

  buttonPressed(index: number): void{
    this.questions[index].pressed = !this.questions[index].pressed;
  }
}
