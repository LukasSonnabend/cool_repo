import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// https://dribbble.com/shots/18607653-HR-Management-System-Organization-Structure-Setup/attachments/13801210?mode=media
@Component({
    selector: 'main-metrics',
    standalone: true,
    imports: [],
    template: `<h2>Timer-component</h2>

`,
})
export class TimerComponent {
  @Input() data!: {title: string, value: number}[];
}
