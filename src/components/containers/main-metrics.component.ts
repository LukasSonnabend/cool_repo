import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'main-metrics',
    standalone: true,
    imports: [MatIconModule,CommonModule],
    template: `
    <div class="grid grid-cols-2 gap-x-4 gap-y-4">
    <div *ngFor="let item of data" class="bg-secondary rounded-lg p-8 flex items-center justify-center text-center">
        <div>
            <mat-icon aria-hidden="false" [fontIcon]="item.materialIcon"/>
            <p class="text-md font-light">{{item.title}}</p>
            <p class="font-bold text-2xl">{{item.value}}</p>
        </div>
    </div>
    </div>
`,
})
export class MainMetricsComponent {
  @Input() data!: {title: string, value: number | string, materialIcon: string}[];
}
