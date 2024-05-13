import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationComponent } from "../components/sidenav.component";
import { MainContentComponent } from "../components/main-content.component";
import { BreadcrumbComponent } from "../components/breadcrumbs.component";
import { CalendarModule } from 'angular-calendar';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CalendarModule, RouterOutlet, SideNavigationComponent, MainContentComponent, BreadcrumbComponent]
})
export class AppComponent {
  title = 'internal-tooler';
}
