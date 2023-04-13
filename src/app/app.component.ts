import { Sort } from '@angular/material/sort';
import { Component } from '@angular/core';
import { TableOptions } from './shared/components/table/services/table-options.service';
import { Column } from './shared/components/table/table.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data : PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  columns: Column[] = [
    { id: 'position', field: 'position', label: 'Position', sortable: true },
    { id: 'name', field: 'name', label: 'Name', sortable: true },
    { id: 'weight', field: 'weight', label: 'Weight' },
    { id: 'symbol', field: 'symbol', label: 'Symbol' },
    { id: 'position1', field: 'position', label: 'Position' },
    { id: 'nameé', field: 'name', label: 'Name' },
    { id: 'weights', field: 'weight', label: 'Weight' },
    { id: 'symbols', field: 'symbol', label: 'Symbol' },
    { id: 'positions', field: 'position', label: 'Position' },
    { id: 'names', field: 'name', label: 'Name' },
    { id: 'weightss', field: 'weight', label: 'Weight' },
    { id: 'symbolss', field: 'symbol', label: 'Symbol' },
    { id: 'positionss', field: 'position', label: 'Position' },
    { id: 'namess', field: 'name', label: 'Name' },
    { id: 'weighsst', field: 'weight', label: 'Weight' },
    { id: 'symssbol', field: 'symbol', label: 'Symbol' },
    { id: 'posssition', field: 'position', label: 'Position' },
    { id: 'namse', field: 'name', label: 'Name' },
    { id: 'weisssght', field: 'weight', label: 'Weight' },
    { id: 'symbssol', field: 'symbol', label: 'Symbol' },
    { id: 'posissssstion', field: 'position', label: 'Position' },
    { id: 'namessss', field: 'name', label: 'Name' },
    { id: 'weigsssht', field: 'weight', label: 'Weight' },
    { id: 'symbsssol', field: 'symbol', label: 'Symbol' }
  ];

  options: Partial<TableOptions> = { viewport: { height: '300px'}, matElevationIndex: 5 };

  onSort(sort: Sort): void {
    console.log('sort', sort);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
