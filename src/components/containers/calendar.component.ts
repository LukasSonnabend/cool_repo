import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef,
  } from '@angular/core';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours,
  } from 'date-fns';
  import { Subject } from 'rxjs';
  import {
    CalendarEvent,
    CalendarEventTimesChangedEvent,
    CalendarWeekViewBeforeRenderEvent,
    CalendarDayViewBeforeRenderEvent,
    CalendarModule,
    DateAdapter,
  } from 'angular-calendar';
  import { EventColor } from 'calendar-utils';
import { CommonModule } from '@angular/common';
  
  const colors: Record<string, EventColor> = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };
  
  @Component({
    selector: 'mwl-demo-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
      `
        h3 {
          margin: 0 0 10px;
        }
  
        pre {
          background-color: #f5f5f5;
          padding: 15px;
        }
      `,
    ],
    standalone: true,
    imports: [CalendarModule, CommonModule],
    templateUrl: './calender.component.html',
  })
  export class CalendarComponent {
    view: string = 'week';
    snapDraggedEvents = true;
  
    dayStartHour = 6;
    viewDate: Date = new Date();
  
    events: CalendarEvent[] = [
      {
        title: 'Draggable event',
        color: colors["yellow"],
        start: new Date(),
        draggable: true,
      },
      {
        title: 'A non draggable event',
        color: colors["blue"],
        start: new Date(),
      },
    ];
  
    refresh: Subject<any> = new Subject();
  
    eventTimesChanged({ event, newStart, newEnd }: any): void {
      event.start = newStart;
      event.end = newEnd;
      this.refresh.next(null);
    }
    public segmentIsValid(date: Date) {
      // valid if time is greater than 0800 andd less than 1700
      return date.getHours() >= 8 && date.getHours() <= 17;
    }
    beforeDayViewRender(day: CalendarDayViewBeforeRenderEvent): void {
      // day.body.hourGrid.forEach((hour) => {
      //   hour.segments.forEach((segment) => {
      //     if (!this.segmentIsValid(segment.date)) {
      //       delete segment.cssClass;
      //       segment.cssClass = 'cal-disabled';
      //     }
      //   });
      // });
    }
    beforeWeekViewRender(body: CalendarWeekViewBeforeRenderEvent): void {
      body.hourColumns.forEach((hourCol) => {
        hourCol.hours.forEach((hour) => {
          hour.segments.forEach((segment) => {
            if (!this.segmentIsValid(segment.date)) {
              delete segment.cssClass;
              segment.cssClass = 'cal-disabled';
            }
          });
        });
      });
    }
  }
  