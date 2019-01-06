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
  ];

  data = {};

  constructor() {
  }

  ngOnInit() {
  }

  onFormSubmit(dynamicForm) {
    // console.log(dynamicForm);
  }
}
