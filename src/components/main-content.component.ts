import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoBarComponent } from "./info-bar.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    template: `
    <router-outlet/>
  `,
    imports: [RouterOutlet, InfoBarComponent]
})
export class MainContentComponent {
}
