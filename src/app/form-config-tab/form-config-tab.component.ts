import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DynamicFormOption} from '../dynamic-form/dynamic-form.component';
import {DynamicFormGeneratorComponent} from '../dynamic-form-generator/dynamic-form-generator.component';

@Component({
  selector: 'app-form-config-tab',
  templateUrl: './form-config-tab.component.html',
  styleUrls: ['./form-config-tab.component.scss']
})
export class FormConfigTabComponent implements OnInit {

  @Output() onComponentSelect: EventEmitter<{ option: DynamicFormOption, formGen: any }> = new EventEmitter<{ option: DynamicFormOption, formGen: any }>();
  public openSideMenu = false;
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Input() options: DynamicFormOption[] = [];
  @Input() activeComponent: DynamicFormOption;
  @ViewChild('formGenView') formGen: DynamicFormGeneratorComponent;

  constructor() {
  }

  ngOnInit() {
  }

  editExistingComponent(option: DynamicFormOption, formGen: any) {
    this.onComponentSelect.emit({option, formGen});
  }

  moveUp($event: MouseEvent) {
    $event.stopImmediatePropagation();
  }

  moveDown($event: MouseEvent) {
    $event.stopImmediatePropagation();
  }
}
