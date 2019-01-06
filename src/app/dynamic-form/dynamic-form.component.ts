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
      required: true,
      type: 'checkbox',
      label: 'Gender',
      name: 'checkbox',
      size: '4',
      min: 3,
      max: 10,
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
      ],
    },
  ];

  data = {
    checkbox: ['value2'],
  };

  constructor() {
  }

  ngOnInit() {
  }

  onFormSubmit(dynamicForm) {
    // console.log(dynamicForm);
  }

  onCheckboxValueChange(selectedList: any[], value: any, $event) {
    console.log($event.target.checked);
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
