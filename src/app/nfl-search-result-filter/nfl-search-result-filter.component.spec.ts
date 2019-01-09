import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NflSearchResultFilterComponent} from './nfl-search-result-filter.component';

describe('NflSearchResultFilterComponent', () => {
  let component: NflSearchResultFilterComponent;
  let fixture: ComponentFixture<NflSearchResultFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NflSearchResultFilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflSearchResultFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
