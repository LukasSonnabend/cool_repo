import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationComponent } from "../components/sidenav.component";
import { MainContentComponent } from "../components/main-content.component";
import { MainMetricsComponent } from "./containers/main-metrics.component";
import { WeekMetricsComponent } from "./containers/week-metrics.component";
import { WeekCalendarDisplayComponent } from "./containers/week-calendar-display.component";
import { InfoBarComponent } from "./info-bar.component";

@Component({
    selector: 'dash-home',
    standalone: true,
    template: `
    <div class="block md:flex gap-0 md:gap-4">
        <div class="w-12/12 md:w-6/12 flex flex-col gap-x-8 gap-y-6">
            <app-info-bar [organizationInfo]="{organizationName: 'On the Run', organizationLogoImageUrl: 'http://test.test'}"/>
            <main-metrics [data]="[{title: 'items_sold', value: 10, materialIcon: 'point_of_sale'}, {title: 'percentage_sold', value: '56%', materialIcon: 'percent' }, {title: 'co2Saved', value: 2000, materialIcon: 'eco'}, {title: 'customersServed', value: 10, materialIcon: 'groups'}]"/>
            <week-metrics [data]="[{title: 'items_sold', value: 10}, {title: 'totalSales', value: 200}, {title: 'co2Saved', value: 2000}]"/>
        </div>
        <div class="rounded-lg w-12/12 md:w-6/12 bg-background p-4">
            <week-calendar-display />
        </div>
    </div>
    `,
    imports: [RouterOutlet, SideNavigationComponent, MainContentComponent, MainMetricsComponent, WeekMetricsComponent, WeekCalendarDisplayComponent, InfoBarComponent]
})
export class DashHomeComponent {
  
}
