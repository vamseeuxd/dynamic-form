import {Component} from '@angular/core';
import {ColSize, DynamicFormOption, DynamicFormType} from './dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: DynamicFormOption[] = [];
  data = {};
  title = 'dynamic-form';
  showAddNewFormController = false;

  addNewControl($event: any) {
    this.options.push($event);
  }

  onNewControlCancel() {
    this.showAddNewFormController = false;
  }
}
