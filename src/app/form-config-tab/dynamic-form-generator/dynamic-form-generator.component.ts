import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ColSize, DynamicFormOption, DynamicFormType} from '../../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-dynamic-form-generator',
  templateUrl: './dynamic-form-generator.component.html',
  styleUrls: ['./dynamic-form-generator.component.scss']
})
export class DynamicFormGeneratorComponent implements OnInit {

  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  private options: DynamicFormOption[] = [];
  public data = {
    'required': true,
    'disabled': false,
    'hide': false,
    'sizeXl': '4',
    'sizeLg': '4',
    'sizeMd': '4',
    'sizeSm': '6',
    'sizeXs': '12',
    'offsetXl': '0',
    'offsetLg': '0',
    'offsetMd': '0',
    'offsetSm': '0',
    'offsetXs': '0'
  };
  @Input() saveButtonLabel = 'Add';
  @ViewChild('formGen') formGen: DynamicFormGeneratorComponent;
  constructor() {

    const config = [
      {
        label: 'Type',
        name: 'type',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: 'text', label: 'TEXT', value: 'text'},
          {id: 'number', label: 'NUMBER', value: 'number'},
          {id: 'date', label: 'DATE', value: 'date'},
          {id: 'range', label: 'RANGE', value: 'range'},
          {id: 'password', label: 'PASSWORD', value: 'password'},
          {id: 'email', label: 'EMAIL', value: 'email'},
          {id: 'radio', label: 'RADIO', value: 'radio'},
          {id: 'select', label: 'SELECT', value: 'select'},
          {id: 'checkbox', label: 'CHECKBOX', value: 'checkbox'},
        ]
      },
      {label: 'label', name: 'label', type: DynamicFormType.TEXT},
      {
        label: 'name',
        name: 'name',
        type: DynamicFormType.TEXT,
        pattern: '^[a-zA-Z][a-zA-Z0-9-_\\.]{1,20}$',
        desc: 'Name Pattern should be without spaces'
      },
      {label: 'Description', name: 'desc', type: DynamicFormType.TEXT, required: false},
      {label: 'Min', name: 'min', type: DynamicFormType.TEXT, required: false},
      {label: 'Max', name: 'max', type: DynamicFormType.TEXT, required: false},
      {label: 'Pattern', name: 'pattern', type: DynamicFormType.TEXT, required: false},
      {
        label: 'Required',
        name: 'required',
        type: DynamicFormType.RADIO,
        dataProvider: [{id: '0', label: 'No', value: false}, {id: '0', label: 'Yes', value: true}]
      },
      {
        label: 'Disabled',
        name: 'disabled',
        type: DynamicFormType.RADIO,
        dataProvider: [{id: '0', label: 'No', value: false}, {id: '0', label: 'Yes', value: true}]
      },
      {
        label: 'Hide',
        name: 'hide',
        type: DynamicFormType.RADIO,
        dataProvider: [{id: '0', label: 'No', value: false}, {id: '0', label: 'Yes', value: true}]
      },
      {
        label: 'Size Xl',
        name: 'sizeXl',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Size Lg',
        name: 'sizeLg',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Size MD',
        name: 'sizeMd',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Size SM',
        name: 'sizeSm',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Size XS',
        name: 'sizeXs',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Offset XL',
        name: 'offsetXl',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Offset LG',
        name: 'offsetLg',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Offset MD',
        name: 'offsetMd',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Offset SM',
        name: 'offsetSm',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
      {
        label: 'Offset XS',
        name: 'offsetXs',
        type: DynamicFormType.SELECT,
        dataProvider: [
          {id: '0', label: 'col_0', value: '0'},
          {id: '1', label: 'col_1', value: '1'},
          {id: '2', label: 'col_2', value: '2'},
          {id: '3', label: 'col_3', value: '3'},
          {id: '4', label: 'col_4', value: '4'},
          {id: '5', label: 'col_5', value: '5'},
          {id: '6', label: 'col_6', value: '6'},
          {id: '7', label: 'col_7', value: '7'},
          {id: '8', label: 'col_8', value: '8'},
          {id: '9', label: 'col_9', value: '9'},
          {id: '10', label: 'col_10', value: '10'},
          {id: '11', label: 'col_11', value: '11'},
          {id: '12', label: 'col_12', value: '12'},
        ]
      },
    ];
    config.forEach(value => {
      this.options.push(
        this.getFormController(
          value.type,
          value.label, value.name,
          value.dataProvider ? value.dataProvider : null,
          value.pattern ? value.pattern : null,
          value.desc ? value.desc : null,
          value.hasOwnProperty('required') ? value.required : true,
        )
      );
    });
  }

  ngOnInit() {
  }

  getFormController(
    type: DynamicFormType,
    label: string,
    name: string,
    dataProvider: { id: string, label: string, value: any }[] = null,
    pattern: string = null,
    desc: string = null,
    required: boolean = true,
  ): DynamicFormOption {
    return {
      pattern: pattern,
      type: type,
      label: label,
      name: name,
      required: required,
      disabled: false,
      hide: false,
      desc: desc,
      sizeXl: ColSize.col_3,
      sizeLg: ColSize.col_3,
      sizeMd: ColSize.col_3,
      sizeSm: ColSize.col_3,
      sizeXs: ColSize.col_12,
      offsetXl: ColSize.col_0,
      offsetLg: ColSize.col_0,
      offsetMd: ColSize.col_0,
      offsetSm: ColSize.col_0,
      offsetXs: ColSize.col_0,
      min: null,
      max: null,
      dataProvider: dataProvider,
    };
  }

  getControlByName(name: string): DynamicFormOption {
    return this.options.filter(value => value.name === name)[0];
  }

  onDateChange($event: any) {
    this.getControlByName('min').hide = false;
    this.getControlByName('max').hide = false;
    this.getControlByName('pattern').hide = true;
    switch ($event.type) {
      case DynamicFormType.TEXT:
      case DynamicFormType.PASSWORD:
        this.getControlByName('min').label = 'Min Characters Required :';
        this.getControlByName('min').type = DynamicFormType.NUMBER;
        this.getControlByName('max').label = 'Max Characters Allowed :';
        this.getControlByName('max').type = DynamicFormType.NUMBER;
        this.getControlByName('pattern').hide = false;
        break;
      case DynamicFormType.NUMBER:
      case DynamicFormType.RANGE:
        this.getControlByName('min').label = 'Min Value Required :';
        this.getControlByName('min').type = DynamicFormType.NUMBER;
        this.getControlByName('max').label = 'Max Value Allowed :';
        this.getControlByName('max').type = DynamicFormType.NUMBER;
        break;
      case DynamicFormType.DATE:
        this.getControlByName('min').label = 'Min Date Required :';
        this.getControlByName('min').type = DynamicFormType.DATE;
        this.getControlByName('max').label = 'Max Date Allowed :';
        this.getControlByName('max').type = DynamicFormType.DATE;
        break;
      case DynamicFormType.EMAIL:
      case DynamicFormType.RADIO:
      case DynamicFormType.SELECT:
        this.getControlByName('min').hide = true;
        this.getControlByName('max').hide = true;
        break;
      case DynamicFormType.CHECKBOX:
        this.getControlByName('min').label = 'Min Options Required :';
        this.getControlByName('min').type = DynamicFormType.NUMBER;
        this.getControlByName('max').label = 'Max Options Allowed :';
        this.getControlByName('max').type = DynamicFormType.NUMBER;
        break;
    }
  }

  addFormClick() {
    this.save.emit(JSON.parse(JSON.stringify(this.data)));
  }
}
