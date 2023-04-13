import { TableOptions, TableOptionsService } from './services/table-options.service';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Column } from './table.interfaces';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  providers: [TableOptionsService],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  /** Options **/
  @Input() set options(value: Partial<TableOptions> | undefined) { this.optionsService.options = value; }
  get options(): TableOptions { return this.optionsService.options; }

  /** Columns **/
  @Input() set columns(value: Column[] | undefined) {
    this._columns = value;
    if (!this.displayedColumnsIds) this.displayedColumnsIds = this._columns?.map((col: Column) => col.id);
  }
  get columns(): Column[] | undefined { return this._columns; }
  private _columns: Column[] | undefined;

  @Input() displayedColumnsIds: string[] | undefined;

  /** Data **/
  @Input() dataSource: unknown[] = [];

  constructor(private optionsService: TableOptionsService) {}

  /**
   * TODO :
   * Formatters
   * Sort with multi
   * Drag & Drop Columns position
   */
}
