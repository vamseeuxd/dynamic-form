import {AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Output() isValidChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() options: DynamicFormOption[] = [];
  @Input() isEditable = false;
  @Output() onOptionEditClick: EventEmitter<DynamicFormOption> = new EventEmitter<DynamicFormOption>();
  public validators = {};

  constructor(private cdRef: ChangeDetectorRef) {
  }

  @Input() data = {};
  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('dynamicForm') form: any;

  public get isValid(): boolean {
    this.cdRef.detectChanges();
    return Object.keys(this.validators).length <= 0;
  }

  private formDataChange() {
    this.dataChange.emit(this.data);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isValidChange.emit(Object.keys(this.validators).length <= 0);
    }, 5);
  }

  private isValidationError(_form, option, validationType): boolean {
    // console.log(option.type);
    if (option.type === 'checkbox') {
      switch (validationType) {
        case 'required':
          const isNotValid0 = option.required ? this.data[option.name].length <= 0 : false;
          this.updateValidators(option, validationType, isNotValid0);
          return isNotValid0;
          break;
        case 'min':
          const isNotValid1 = (this.data[option.name].length > 0 && option.min) ? this.data[option.name].length < option.min : false;
          this.updateValidators(option, validationType, isNotValid1);
          return isNotValid1;
          break;
        case 'max':
          const isNotValid2 = (this.data[option.name].length > 0 && option.max) ? this.data[option.name].length > option.max : false;
          this.updateValidators(option, validationType, isNotValid2);
          return isNotValid2;
          break;
      }
    } else if (option.type === 'date') {
      switch (validationType) {
        case 'required':
          const isNotValid1 = (
            _form.controls[option.name] &&
            _form.controls[option.name].errors &&
            _form.controls[option.name].errors[validationType]
          );
          this.updateValidators(option, validationType, isNotValid1);
          return isNotValid1 && !_form.controls[option.name].pristine;
          break;
        case 'min':
          const isNotValid2 = (option.min) ? new Date(this.data[option.name]) < new Date(option.min) : false;
          this.updateValidators(option, validationType, isNotValid2);
          return isNotValid2;
          break;
        case 'max':
          const isNotValid3 = (option.max) ? new Date(this.data[option.name]) > new Date(option.max) : false;
          this.updateValidators(option, validationType, isNotValid3);
          return isNotValid3;
          break;
      }
    } else if (option.type === 'number') {
      switch (validationType) {
        case 'required':
          const isNotValid1 = (
            _form.controls[option.name] &&
            _form.controls[option.name].errors &&
            _form.controls[option.name].errors[validationType]
          );
          this.updateValidators(option, validationType, isNotValid1);
          return isNotValid1 && !_form.controls[option.name].pristine;
          break;
        case 'min':
          if (
            _form.controls[option.name] &&
            _form.controls[option.name].errors &&
            _form.controls[option.name].errors['required']
          ) {
            return false;
          } else {
            const isNotValid2 = (option.min) ? (this.data[option.name] < option.min) : false;
            this.updateValidators(option, validationType, isNotValid2);
            return isNotValid2;
          }
          break;
        case 'max':
          const isNotValid3 = (option.max) ? (this.data[option.name] > option.max) : false;
          this.updateValidators(option, validationType, isNotValid3);
          return isNotValid3;
          break;
      }
    } else {
      const isNotValid = (
        _form.controls[option.name] &&
        _form.controls[option.name].errors &&
        _form.controls[option.name].errors[validationType]
      );
      this.updateValidators(option, validationType, isNotValid);
      return isNotValid && !_form.controls[option.name].pristine;
    }
  }

  private updateValidators(option: DynamicFormOption, validationType, isNotValid) {
    if (!this.validators[option.name]) {
      this.validators[option.name] = {};
    }
    if (isNotValid) {
      this.validators[option.name][validationType] = isNotValid;
    } else {
      delete this.validators[option.name][validationType];
    }
    if (Object.keys(this.validators[option.name]).length === 0) {
      delete this.validators[option.name];
    }
    if (!option.required) {
      delete this.validators[option.name];
    }
  }

  private onCheckboxValueChange(selectedList: any[], value: any, $event) {
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

  private isCheckboxSelected(selectedList: any[], value: any): boolean {
    return selectedList ? (selectedList.indexOf(value) >= 0) : false;
  }

  private getResponsiveClassName(option: DynamicFormOption): string {
    return 'mt-3' +
      ' col-xl-' + option.sizeXl +
      ' col-lg-' + option.sizeLg +
      ' col-md-' + option.sizeMd +
      ' col-sm-' + option.sizeSm +
      ' col-xs-' + option.sizeXs +
      ' offset-xl-' + option.offsetXl +
      ' offset-lg-' + option.offsetLg +
      ' offset-md-' + option.offsetMd +
      ' offset-sm-' + option.offsetSm +
      ' offset-xs-' + option.offsetXs;
  }

  private getOptionsToShow(options: DynamicFormOption[]): DynamicFormOption[] {
    return options.filter(option => !option.hide);
  }
}

export interface DynamicFormOption {
  required: boolean;
  disabled?: boolean;
  hide?: boolean;
  type: DynamicFormType;
  id?: string;
  formId?: string;
  index?: number;
  label: string;
  name: string;
  sizeXl: ColSize;
  sizeLg: ColSize;
  sizeMd: ColSize;
  sizeSm: ColSize;
  sizeXs: ColSize;
  offsetXl: ColSize;
  offsetLg: ColSize;
  offsetMd: ColSize;
  offsetSm: ColSize;
  offsetXs: ColSize;
  pattern?: string;
  desc?: string;
  min?: any;
  max?: any;
  dataProvider?: { id: string, label: string, value: any }[];
}

export enum DynamicFormType {
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  RANGE = 'range',
  PASSWORD = 'password',
  EMAIL = 'email',
  RADIO = 'radio',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
}

export enum ColSize {
  col_0 = '0',
  col_1 = '1',
  col_2 = '2',
  col_3 = '3',
  col_4 = '4',
  col_5 = '5',
  col_6 = '6',
  col_7 = '7',
  col_8 = '8',
  col_9 = '9',
  col_10 = '10',
  col_11 = '11',
  col_12 = '12',
}
