import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {

  @Input() options = [];

  @Input() data = {};
  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  isValidationError(_form, option, validationType): boolean {
    if (option.type === 'checkbox') {
      switch (validationType) {
        case 'required':
          return option.required ? this.data[option.name].length <= 0 : false;
          break;
        case 'min':
          return (this.data[option.name].length > 0 && option.min) ? this.data[option.name].length < option.min : false;
          break;
        case 'max':
          return (this.data[option.name].length > 0 && option.max) ? this.data[option.name].length > option.max : false;
          break;
      }
    } else if (option.type === 'date') {
      switch (validationType) {
        case 'required':
          return (
            _form.controls[option.name] &&
            _form.controls[option.name].errors &&
            _form.controls[option.name].errors[validationType] &&
            !_form.controls[option.name].pristine
          );
          break;
        case 'min':
          return (option.max) ? new Date(this.data[option.name]) < new Date(option.min) : false;
          break;
        case 'max':
          return (option.min) ? new Date(this.data[option.name]) > new Date(option.max) : false;
          break;
      }
    } else {
      return (
        _form.controls[option.name] &&
        _form.controls[option.name].errors &&
        _form.controls[option.name].errors[validationType] &&
        !_form.controls[option.name].pristine
      );
    }
  }

  onFormSubmit(dynamicForm) {
    // console.log(dynamicForm);
  }

  onCheckboxValueChange(selectedList: any[], value: any, $event) {
    if ($event.target.checked) {
      selectedList.push(value);
    } else {
      for (let i = selectedList.length - 1; i >= 0; i--) {
        if (selectedList[i] === value) {
          selectedList.splice(i, 1);
        }
      }
    }
  }

  isCheckboxSelected(selectedList: any[], value: any): boolean {
    return selectedList ? (selectedList.indexOf(value) >= 0) : false;
  }
}
