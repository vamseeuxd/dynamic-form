import {Component, TemplateRef} from '@angular/core';
import {ColSize, DynamicFormOption, DynamicFormType} from './dynamic-form/dynamic-form.component';
import {FormsService, IFormData} from './services/forms.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormConfigTabComponent} from './form-config-tab/form-config-tab.component';
import {ControllerModelService} from './services/controller.model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public forms: IFormData[] = [];
  public newFormName = '';
  public updateFormName = '';
  public activeForm: IFormData;

  constructor(public formsService: FormsService, public controllerService: ControllerModelService) {
    this.formsService.itemRef.subscribe(value => {
      this.forms = value;
      this.activeForm = null;
      this.forms.forEach(value1 => {
        if (value1.isActive) {
          this.activeForm = value1;
        }
      });
    });
    this.formsService.init();
  }

  addNewForm() {
    if (this.newFormName.length > 3) {
      this.formsService.add({name: this.newFormName});
      this.newFormName = '';
    } else {
      alert('Minimum 3 Charters required');
    }
  }

  updateForm(form: IFormData) {
    if (this.updateFormName.length > 3) {
      this.formsService.updateName(this.updateFormName, form);
      this.updateFormName = '';
      this.formsService.updateEdit(false, form);
    } else {
      alert('Minimum 3 Charters required');
    }
  }
}
