import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AgGridAngular],
  styles: [`.ag-table { height: 400px}`],
  template: `
    <ag-grid-angular
      class="ag-theme-custom ag-table"
      [rowData]="rowData"
      [columnDefs]="colDefs">
    </ag-grid-angular>
  `
})
export class TableComponent<T extends Record<string, any>> {
  @Input() rowData: T[] | undefined;
  
  @Input() set type(value: T) {
    this.colDefs = Object.keys(value).map(key => ({ field: key }));
  }

  @Input() customCellRenderers: { [key: string]: any } = {};

  colDefs: ColDef[] = [];

  ngOnChanges() {
    this.applyCustomCellRenderers();
  }

  applyCustomCellRenderers() {
    this.colDefs.forEach(colDef => {
        // @ts-ignore
      const customRenderer = this.customCellRenderers[colDef.field];
      if (customRenderer) {
        colDef.cellRenderer = customRenderer;
      }
    });
  }
}
