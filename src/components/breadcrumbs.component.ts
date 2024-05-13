import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../app/breadcrumb-service.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
standalone: true,
imports: [CommonModule, RouterModule],
  selector: 'app-breadcrumb',
  template: `
    <div class="text-sm breadcrumbs text-primary">
      <ul>
        <li *ngFor="let breadcrumb of breadcrumbs">
          <a [routerLink]="breadcrumb.url" class="text-primary">{{ breadcrumb.label }}</a>
        </li>
      </ul>
    </div>
  `,
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs: { label: string, url: string }[] = [];
      // @ts-ignore
  private breadcrumbSubscription: Subscription;

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    // Subscribe to changes in the breadcrumb service
    // @ts-ignore
    this.breadcrumbSubscription = this.breadcrumbService.breadcrumbsChanged.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the breadcrumb service when the component is destroyed
    this.breadcrumbSubscription.unsubscribe();
  }
}
