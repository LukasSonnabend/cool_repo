import { Routes } from '@angular/router';
import { MainContentComponent } from '../components/main-content.component';
import { DashHomeComponent } from '../components/dash-home.component';
import { TimerComponent } from '../components/containers/timer.component';
import { CalendarComponent } from '../components/containers/calendar.component';

export const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview' // Redirect to overview by default
  },
  { 
    path: 'overview',
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '',
        component: DashHomeComponent, 
      },
      { 
        path: 'store', 
        data: {
          breadcrumb: 'Store'
        },
        component: TimerComponent, 
      },
      { 
        path: 'organization', 
        data: {
          breadcrumb: 'Organization'
        },
        component: TimerComponent, 
      },
      { 
        path: 'calendar', 
        data: {
          breadcrumb: 'Calendar'
        },
        component: CalendarComponent, 
      },
    ]
  },
];
