import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'week-calendar-display',
    styles: [`.selected {
        padding: 0 10px 0 10px;
        transform: scale(1.2);
        background-color: rgba(219, 230, 244, .1); /* Change this to your preferred color */
        color: white;
      }`, `.current p {
        color: #d6ed55
      }`],
    template: `
    <h2 class="font-semibold text-primary text-xl">Weekly Overview</h2>
    <p class="text-primary text-sm my-1">{{currentDate}}</p>
    <div class="grid grid-cols-7 gap-4 mt-3">
      <div *ngFor="let item of weekData; let i = index" 
           [class.selected]="i === selectedDay" 
           [class.current]="item.day === currentDay"
           (click)="selectDay(i)"
           class="bg-background rounded-lg p-1 flex flex-col items-center justify-center text-center cursor-pointer">
        <div>
          <p class="text-primary text-md mb-2">{{item.day}}</p>
          <p class="text-primary text-md font-bold">{{item.date}}</p>
          <!-- <p class="text-primary font-bold text-2xl">{{item.value}}</p> -->
        </div>
      </div>
    </div>
`,
})
export class WeekCalendarDisplayComponent implements OnInit {
  weekData: {day: string, date: string, value: number}[] = [];
  currentDate: string = '';
  selectedDay: number = 0;
  currentDay: string = '';

  ngOnInit() {
    this.setupCurrentDate();
    this.setupWeekData();
  }

  setupCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    // @ts-ignore
    this.currentDate = date.toLocaleDateString(undefined, options);
    this.currentDay = date.toLocaleDateString(undefined, { weekday: 'short' });
  }

  setupWeekData() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - currentDayOfWeek + i);
      const dayIndex = date.getDay();
      const dateString = `${date.getDate()}`;//`${date.getMonth() + 1}/${date.getDate()}`;
      this.weekData.push({ day: days[dayIndex], date: dateString, value: 0 });
    }
  }

  selectDay(index: number) {
    this.selectedDay = index;
  }
}
