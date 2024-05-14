import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info-bar',
  imports: [MatIconModule, MatIconModule],
  standalone: true,
  template: `
  <div class="flex items-center flex-row justify-between">
    <h2 class="text-primary font-bold" style="margin-bottom: 0!important">{{organizationInfo.organizationName}}</h2>
    <!-- <button class="btn btn-ghost" [matMenuTriggerFor]="notificationMenu">
      <mat-icon class="mr-4 self-center text-primary" aria-hidden="false" fontIcon="notifications"></mat-icon>
    </button> -->
    <!-- <mat-menu #notificationMenu="matMenu">
      <button mat-menu-item (click)="viewNotifications()">View Notifications</button>
    </mat-menu> -->
  </div>
  `,
})
export class InfoBarComponent {
    @Input() organizationInfo!: {organizationName: string, organizationLogoImageUrl: string}; 
}
