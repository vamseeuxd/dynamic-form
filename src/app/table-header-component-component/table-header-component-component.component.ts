import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-header-component-component',
  templateUrl: './table-header-component-component.component.html',
  styleUrls: ['./table-header-component-component.component.scss']
})
export class TableHeaderComponentComponentComponent implements OnInit {

  @Output() sortChange: EventEmitter<IColumn> = new EventEmitter<IColumn>();
  public readonly columnSortState = ColumnSortState;
  columns: IColumn[] = [
    {sort: ColumnSortState.NO_SORT, field: 'column01', title: 'Column One', width: '400px'},
    {sort: ColumnSortState.NO_SORT, field: 'column02', title: 'Column Two'},
    {sort: ColumnSortState.NO_SORT, field: 'column03', title: 'Column Three'},
    {sort: ColumnSortState.NO_SORT, field: 'column04', title: 'Column Four'},
    {sort: ColumnSortState.NO_SORT, field: 'column05', title: 'Column Five'},
    {sort: ColumnSortState.NO_SORT, field: 'column06', title: 'Column Six'}
  ];

  constructor(private headerColumnRef: ElementRef) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateColumnsWidth();
  }

  changeSort(column: IColumn) {
    switch (column.sort) {
      case this.columnSortState.NO_SORT:
        column.sort = ColumnSortState.ASCENDING;
        break;
      case this.columnSortState.ASCENDING:
        column.sort = ColumnSortState.DESCENDING;
        break;
      case this.columnSortState.DESCENDING:
        column.sort = ColumnSortState.NO_SORT;
        break;
      default:
        column.sort = ColumnSortState.NO_SORT;
        break;
    }
    this.sortChange.emit(column);
  }

  ngOnInit() {
    this.updateColumnsWidth();
  }

  updateColumnsWidth() {
    let totalHeaderWidth;
    totalHeaderWidth = 100;
    let noOfColumnsHaveWidth = 0;
    this.columns.forEach((column: IColumn) => {
      if (column.width) {
        const colWidth = this.widthInPercentage(this.headerColumnRef.nativeElement.offsetWidth, column.width, column);
        if (colWidth) {
          noOfColumnsHaveWidth++;
          // column.width = colWidth + '%';
          totalHeaderWidth = (totalHeaderWidth - colWidth);
        }
      }
    });
    const colWidthForRemainCols = totalHeaderWidth / (this.columns.length - noOfColumnsHaveWidth);
    this.columns.forEach((column: IColumn) => {
      if (!column.width) {
        noOfColumnsHaveWidth++;
        column.width = colWidthForRemainCols + '%';
      }
    });
  }

  private widthInPercentage(headerWidth: number, _columnWidth: string, column: IColumn): number {
    if (_columnWidth.indexOf('px') > 0 && !isNaN(Number(_columnWidth.split('px')[0]))) {
      let columnWidth = Number(_columnWidth.split('px')[0]);
      return (columnWidth / headerWidth) * 100;
    } else if (_columnWidth.indexOf('%') > 0 && !isNaN(Number(_columnWidth.split('%')[0]))) {
      return Number(_columnWidth.split('%')[0]);
    }
    console.error('invalid Column Width. Column width should be in "px" or "%"', column);
    return null;
  }

}

export interface IColumn {
  field: string,
  title: string,
  sort: ColumnSortState,
  width?: string
}

export enum ColumnSortState {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
  NO_SORT = 'noSort',
}
