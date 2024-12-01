import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  groups: string[] = ['PRE-BALLET', 'LITTLE BALLET', 'BALLET I', 'BALLET II', 'ELITE TEEN'];

  groupSummaries: Record<string, string> = {
    'PRE-BALLET': 'Students aged 3-4 years old (boys and girls) are introduced to the basics of ballet in a fun and creative environment, focusing on coordination, rhythm, and self-expression.',
    'LITTLE BALLET': 'Designed for students aged 5-6 years old, this group builds on foundational ballet skills. Students will be placed and relocated by the instructor based on their progress and readiness.',
    'BALLET I': 'For students aged 6½-8 years old, this group includes a mix of tap, jazz, aerial, and ballet. Those advancing from Little Ballet are moved to this group for further development.',
    'BALLET II': 'Students aged 9-11 years old advance their skills with more rigorous techniques, focusing on strength, precision, and artistry in multiple dance styles.',
    'ELITE TEEN': 'A specialized group for advanced-level teens aged 12 and up, offering a challenging curriculum to refine technique and performance across various styles.'
  };

  week = [
    {
      day: 'Monday',
      schedules: [
        {group: 'PRE-BALLET', class: 'Ballet/Latin Rhythms', time: '5:00 PM - 6:00 PM'},
        {group: 'LITTLE BALLET', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'BALLET I', class: 'Hip-Hop', time: '5:00 PM - 6:00 PM'},
        {group: 'BALLET I', class: 'Tap', time: '6:00 PM - 7:00 PM'},
        {group: 'BALLET II', class: 'Hip-hop', time: '6:00 PM - 7:00 PM'},
        {group: 'BALLET II', class: 'Ballet', time: '7:00 PM - 8:00 PM'},
        {group: 'ELITE TEEN', class: 'Hip-hop', time: '7:00 PM - 8:00 PM'}
      ]
    },
    {
      day: 'Tuesday',
      schedules: [
        {group: 'PRE-BALLET', class: 'Tap', time: '6:00 PM - 7:00 PM'},
        {group: 'LITTLE BALLET', class: 'Tap/Latin Rhythms', time: '5:00 PM - 7:00 PM'},
        {group: 'BALLET I', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'BALLET II', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'ELITE TEEN', class: 'Jazz', time: '7:00 PM - 8:30 PM'}
      ]
    },
    {
      day: 'Wednesday',
      schedules: [
        {group: 'PRE-BALLET', class: 'Gymnastics', time: '5:00 PM - 6:00 PM'},
        {group: 'LITTLE BALLET', class: 'Gymnastics', time: '5:00 PM - 6:00 PM'},
        {group: 'BALLET I', class: 'Jazz', time: '5:00 PM - 6:00 PM'},
        {group: 'BALLET I', class: 'Gymnastics', time: '6:00 PM - 7:00 PM'},
        {group: 'BALLET II', class: 'Gymnastics', time: '7:00 PM - 8:30 PM'},
        {group: 'ELITE TEEN', class: 'Tap', time: '6:00 PM - 7:00 PM'},
        {group: 'ELITE TEEN', class: 'Gymnastics', time: '7:00 PM - 8:30 PM'}
      ]
    },
    {
      day: 'Thursday',
      schedules: [
        {group: 'PRE-BALLET', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'LITTLE BALLET', class: 'Ballet', time: '5:00 PM - 6:00 PM'},
        {group: 'BALLET I', class: 'Ballet', time: '5:00 PM - 6:00 PM'},
        {group: 'BALLET II', class: 'Tap', time: '6:00 PM - 7:00 PM'},
        {group: 'BALLET II', class: 'Jazz', time: '7:00 PM - 8:00 PM'},
        {group: 'ELITE TEEN', class: 'Ballet', time: '6:00 PM - 8:00 PM'}
      ]
    },
    {
      day: 'Friday',
      schedules: [
        {group: 'PRE-BALLET', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'LITTLE BALLET', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'BALLET I', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'BALLET II', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'ELITE TEEN', class: 'NO CLASSES TODAY!', time: '-----------------------'}
      ]
    },
    {
      day: 'Saturday',
      schedules: [
        {group: 'PRE-BALLET', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'LITTLE BALLET', class: 'NO CLASSES TODAY!', time: '-----------------------'},
        {group: 'BALLET I', class: 'Aerial Silks', time: '12:00 PM - 1:00 PM'},
        {group: 'BALLET II', class: 'Aerial Silks', time: '1:00 PM - 2:00 PM'},
        {group: 'ELITE TEEN', class: 'Aerial Silks', time: '1:00 PM - 2:00 PM'}
      ]
    }]

    selected: string[] = ['PRE-BALLET', 'LITTLE BALLET', 'BALLET I', 'BALLET II', 'ELITE TEEN'];

    filterSearch(group: string): void{
      
      if(this.selected.length == this.groups.length){
        this.selected = [];
      }

      if(this.selected.includes(group)){
        this.selected = this.selected.filter(item => item !== group);
      }
      else{
        this.selected.push(group);
      }
    }
    
    clearAll(): void{
      this.selected = [];
    }

    refresh(): void{
      this.selected = this.groups;
    }
}
