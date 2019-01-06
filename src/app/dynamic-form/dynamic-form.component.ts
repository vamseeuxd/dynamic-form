import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {

  options = [
    {
      desc: 'First Name',
      required: true,
      type: 'text',
      label: 'First Name',
      name: 'firstName',
      size: '4',
      min: 3,
      max: 10,
    },
    {
      desc: 'Password',
      required: true,
      type: 'password',
      label: 'Password',
      name: 'password',
      size: '4',
      min: 3,
      max: 10,
    },
    {
      desc: 'Email',
      required: true,
      type: 'email',
      label: 'Email',
      name: 'email',
      size: '4',
      min: 3,
      max: 10,
    },
    {
      desc: 'Gender',
      required: true,
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      size: '4',
      min: 3,
      max: 10,
      dataProvider: [
        {
          id: 'gender_male',
          label: 'Male',
          value: 'male',
        },
        {
          id: 'gender_female',
          label: 'Female',
          value: 'female',
        },
      ],
    },
    {
      desc: 'Checkbox Example',
      required: false,
      type: 'checkbox',
      label: 'Gender',
      name: 'checkbox',
      size: '4',
      min: 2,
      max: 4,
      dataProvider: [
        {
          id: 'checkbox_1',
          label: 'Value 1',
          value: 'value1',
        },
        {
          id: 'checkbox_2',
          label: 'Value 2',
          value: 'value2',
        },
        {
          id: 'checkbox_3',
          label: 'Value 3',
          value: 'value3',
        },
        {
          id: 'checkbox_4',
          label: 'Value 4',
          value: 'value4',
        },
        {
          id: 'checkbox_5',
          label: 'Value 5',
          value: 'value5',
        },
      ],
    },
  ];

  data = {
    checkbox: ['value2'],
    gender: 'female'
  };

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
