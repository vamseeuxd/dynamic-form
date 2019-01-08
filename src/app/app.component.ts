import {Component} from '@angular/core';
import {ColSize, DynamicFormOption, DynamicFormType} from './dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: DynamicFormOption[] = [{
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
    'offsetXs': '0',
    'type': 'text',
    'label': 'Sample One',
    'name': 'sampleOne'
  }, {
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
    'offsetXs': '0',
    'type': 'text',
    'label': 'Sample Two',
    'name': 'sampleTwo'
  }];
  data = {};
  activeTab = 0;
  activeComponent = '';
  title = 'dynamic-form';
  showAddNewFormController = false;

  addNewControl($event: any) {
    this.options.push($event);
    console.log(JSON.stringify(this.options));
  }

  onNewControlCancel() {
    this.showAddNewFormController = false;
  }

  editExistingComponent($event: { option: DynamicFormOption, formGen: any }) {
    this.activeComponent = $event.option.name;
    $event.formGen.data = JSON.parse(JSON.stringify($event.option));
  }
}
