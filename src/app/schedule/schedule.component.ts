import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  groups: string[] = ['PRE-BALLET', 'LITTLE BALLET', 'BALLET I', 'BALLET II', 'ELITE TEEN'];

  groupSummaries: Record<string, string> = {
    'PRE-BALLET': 'Students will be accepted starting at 2 years old (boys and girls)...',
    'LITTLE BALLET': 'Students will be placed and relocated by the instructor...',
    'BALLET I': 'This group includes a mix of tap, jazz, aerial, and ballet...',
    'BALLET II': 'Students advance their skills with more rigorous techniques...',
    'ELITE TEEN': 'A specialized group for advanced-level teens...'
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
