import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  template: `
  <div class="w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-screen flex flex-col justify-between">
    <div class="bg-background rounded-lg flex flex-col flex-grow">
      <a class="btn btn-ghost text-primary text-xl text-center mt-12 mb-8">daisyUI</a>
      <div class="flex flex-col flex-grow">


        <a class="btn btn-ghost flex flex-row justify-center w-80 text-primary" routerLink="/">
        <div class="w-10/12 flex">
          <mat-icon class="mr-4 self-center" aria-hidden="false" fontIcon="home"></mat-icon>
          <p class="self-center text-lg font-normal" style="margin-bottom: 0!important">Home</p>
          </div>
        </a>


      <a class="btn btn-ghost flex flex-row justify-center w-80 text-primary" routerLink="/overview/store">
      <div class="w-10/12 flex">
        <mat-icon class="mr-4 self-center" aria-hidden="false" fontIcon="storefront"></mat-icon>
        <p class="self-center text-lg font-normal" style="margin-bottom: 0!important">Store</p>
        </div>
      </a>

    <a class="btn btn-ghost flex flex-row justify-center w-80 text-primary" routerLink="/overview/organization">
        <div class="w-10/12 flex">
          <mat-icon class="mr-4 self-center" aria-hidden="false" fontIcon="corporate_fare"></mat-icon>
          <p class="self-center text-lg font-normal" style="margin-bottom: 0!important">Organization</p>
          </div>
      </a>

        
        <a class="btn btn-ghost flex flex-row justify-center w-80 text-primary" routerLink="/overview/calendar">
        <div class="w-10/12 flex">
          <mat-icon class="mr-4 self-center" aria-hidden="false" fontIcon="calendar_month"></mat-icon>
          <p class="self-center text-lg font-normal" style="margin-bottom: 0!important">Calendar</p>
          </div>
      </a>
                  
      </div>
    <!-- Bottom Menu Item -->
    <button class="btn btn-ghost text-primary">Logout</button>
    </div>
    <!-- https://dribbble.com/shots/19514541-Activity-Tracking-Dashboard -->
  </div>
  `,
})
export class SideNavigationComponent {
}
