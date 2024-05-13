import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'week-metrics',
    standalone: true,
    template: `
    <div class="grid grid-cols-3 gap-4">
    <div *ngFor="let item of data" class="bg-background rounded-lg p-8 flex items-center justify-center text-center">
        <div>
            <p class="text-primary text-md font-light">{{item.title}}</p>
            <p class="text-primary font-bold text-2xl">{{item.value}}</p>
        </div>
    </div>
    </div>
`,
    imports: [CommonModule]
})
export class WeekMetricsComponent {
  @Input() data!: {title: string, value: number}[];
}
