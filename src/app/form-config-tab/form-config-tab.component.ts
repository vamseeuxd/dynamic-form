import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DynamicFormOption} from '../dynamic-form/dynamic-form.component';
import {DynamicFormGeneratorComponent} from './dynamic-form-generator/dynamic-form-generator.component';

@Component({
  selector: 'app-form-config-tab',
  templateUrl: './form-config-tab.component.html',
  styleUrls: ['./form-config-tab.component.scss']
})
export class FormConfigTabComponent implements OnInit {
  @ViewChild('formGen') formGen: DynamicFormGeneratorComponent;

  @Output() onComponentSelect: EventEmitter<{ option: DynamicFormOption, formGen: any }> = new EventEmitter<{ option: DynamicFormOption, formGen: any }>();
  public openSideMenu = false;
  showActionBar = false;
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<{ controllerData: any, formGen: any }> = new EventEmitter<{ controllerData: any, formGen: any }>();
  @Output() delete: EventEmitter<DynamicFormOption> = new EventEmitter<DynamicFormOption>();
  @Output() moveDown: EventEmitter<DynamicFormOption> = new EventEmitter<DynamicFormOption>();
  @Output() moveUp: EventEmitter<DynamicFormOption> = new EventEmitter<DynamicFormOption>();
  @Input() options: DynamicFormOption[] = [];
  @Input() activeComponent: DynamicFormOption;
  @Input() saveButtonLabel = 'Add';

  get formRef() {
    return this.formGen.formGen;
  }

  constructor() {
  }

  ngOnInit() {
  }

  editExistingComponent(option: DynamicFormOption, formGen: any) {
    this.onComponentSelect.emit({option, formGen});
  }

  moveUpItem($event: MouseEvent, optionIndex, option: DynamicFormOption) {
    $event.stopImmediatePropagation();
    this.moveUp.emit(option);
  }

  moveDownItem($event: MouseEvent, optionIndex, option: DynamicFormOption) {
    $event.stopImmediatePropagation();
    this.moveDown.emit(option);
  }

  deleteItem($event: MouseEvent, optionIndex, option: DynamicFormOption) {
    $event.stopImmediatePropagation();
    this.delete.emit(option);
  }
}
