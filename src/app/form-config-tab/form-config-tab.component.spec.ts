import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormConfigTabComponent} from './form-config-tab.component';

describe('FormConfigTabComponent', () => {
  let component: FormConfigTabComponent;
  let fixture: ComponentFixture<FormConfigTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormConfigTabComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
