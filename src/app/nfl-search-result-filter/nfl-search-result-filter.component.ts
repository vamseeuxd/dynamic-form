import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nfl-search-result-filter',
  templateUrl: './nfl-search-result-filter.component.html',
  styleUrls: ['./nfl-search-result-filter.component.scss']
})
export class NflSearchResultFilterComponent implements OnInit {


  @Input() title = 'Test Result';
  @Input() boardType = 'Asimav - Build Plan ID : 12';
  @Input() boardQuantity = 4;
  @Output() viewLogsClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() visualSnapshotClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }

}
