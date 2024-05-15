import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationComponent } from "../components/sidenav.component";
import { MainContentComponent } from "../components/main-content.component";
import { MainMetricsComponent } from "./containers/main-metrics.component";
import { WeekMetricsComponent } from "./containers/week-metrics.component";
import { WeekCalendarDisplayComponent } from "./containers/week-calendar-display.component";
import { InfoBarComponent } from "./info-bar.component";
import { LoginForm } from "../app/login-form.component";
import { LoginFormWrapper } from "../app/login-form-wrapper.component";
import { TableComponent } from "./containers/table.component";

@Component({
    selector: 'dash-home',
    standalone: true,
    template: `
    <!-- <app-login-form-wrapper/>-->
    <app-table [rowData]="rowData" [type]="rowData[0]" [customCellRenderers]="customRenderers"></app-table>

    <!-- <div class="block md:flex gap-0 md:gap-4">
    <div class="w-12/12 md:w-6/12 flex flex-col gap-x-8 gap-y-6">
            <app-info-bar [organizationInfo]="{organizationName: 'On the Run', organizationLogoImageUrl: 'http://test.test'}"/>
            <main-metrics [data]="[{title: 'items_sold', value: 10, materialIcon: 'point_of_sale'}, {title: 'percentage_sold', value: '56%', materialIcon: 'percent' }, {title: 'co2Saved', value: 2000, materialIcon: 'eco'}, {title: 'customersServed', value: 10, materialIcon: 'groups'}]"/>
            <week-metrics [data]="[{title: 'items_sold', value: 10}, {title: 'totalSales', value: 200}, {title: 'co2Saved', value: 2000}]"/>
        </div>
        <div class="rounded-lg w-12/12 md:w-6/12 bg-background p-4">
            <week-calendar-display />
        </div>
    </div>  -->
    `,
    imports: [RouterOutlet, SideNavigationComponent, MainContentComponent, MainMetricsComponent, WeekMetricsComponent, WeekCalendarDisplayComponent, InfoBarComponent, LoginFormWrapper, TableComponent]
})
export class DashHomeComponent {
    rowData = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true, id: 1 },
        { make: "Ford", model: "F-Series", price: 33850, electric: false, id: 2 },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false, id: 3 },
      ];
     
      // Column Definitions: Defines the columns to be displayed.
      colDefs = [
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" },
        { field: "id"}
      ];

      customRenderers = {
        // @ts-ignore
        price: (params: { value: any; }) => {
          // Custom renderer logic for the 'price' column
          return params.value ? `$${params.value.toFixed(2)}` : '';
        },

        // electric: (params: { value: any; }) => {
        //   // Custom renderer logic for the 'electric' column
        //   return params.value ? 'Yes' : 'No';
        // }
      };
}
