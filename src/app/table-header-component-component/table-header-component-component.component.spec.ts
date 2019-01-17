import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableHeaderComponentComponentComponent} from './table-header-component-component.component';

describe('TableHeaderComponentComponentComponent', () => {
  let component: TableHeaderComponentComponentComponent;
  let fixture: ComponentFixture<TableHeaderComponentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableHeaderComponentComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeaderComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
