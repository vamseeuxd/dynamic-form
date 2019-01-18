import {Injectable, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormConfigTabComponent} from '../form-config-tab/form-config-tab.component';
import {ColSize, DynamicFormOption, DynamicFormType} from '../dynamic-form/dynamic-form.component';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  options: DynamicFormOption[] = [
    {
      'required': true,
      'disabled': false,
      'hide': false,
      'id': '123456',
      'index': 0,
      'sizeXl': ColSize.col_4,
      'sizeLg': ColSize.col_4,
      'sizeMd': ColSize.col_4,
      'sizeSm': ColSize.col_6,
      'sizeXs': ColSize.col_12,
      'offsetXl': ColSize.col_0,
      'offsetLg': ColSize.col_0,
      'offsetMd': ColSize.col_0,
      'offsetSm': ColSize.col_0,
      'offsetXs': ColSize.col_0,
      'type': DynamicFormType.TEXT,
      'label': 'Sample One',
      'name': 'sampleOne'
    }, {
      'required': true,
      'disabled': false,
      'hide': false,
      'id': '123457',
      'index': 1,
      'sizeXl': ColSize.col_4,
      'sizeLg': ColSize.col_4,
      'sizeMd': ColSize.col_4,
      'sizeSm': ColSize.col_6,
      'sizeXs': ColSize.col_12,
      'offsetXl': ColSize.col_0,
      'offsetLg': ColSize.col_0,
      'offsetMd': ColSize.col_0,
      'offsetSm': ColSize.col_0,
      'offsetXs': ColSize.col_0,
      'type': DynamicFormType.TEXT,
      'label': 'Sample Two',
      'name': 'sampleTwo'
    }, {
      'required': true,
      'disabled': false,
      'hide': false,
      'id': '123458',
      'index': 2,
      'sizeXl': ColSize.col_4,
      'sizeLg': ColSize.col_4,
      'sizeMd': ColSize.col_4,
      'sizeSm': ColSize.col_6,
      'sizeXs': ColSize.col_12,
      'offsetXl': ColSize.col_0,
      'offsetLg': ColSize.col_0,
      'offsetMd': ColSize.col_0,
      'offsetSm': ColSize.col_0,
      'offsetXs': ColSize.col_0,
      'type': DynamicFormType.TEXT,
      'label': 'Sample Three  Chinna',
      'name': 'sampleThree'
    }
  ];
  data = {};
  resetForm = true;
  openFormConfigContainer = false;
  saveButtonLabel = 'Add';
  activeComponent = '';
  controlInUpdate: DynamicFormOption = null;
  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  public openModal() {
    this.modalRef = this.modalService.show(FormConfigTabComponent, {class: 'modal-xl'});
    (this.modalRef.content as FormConfigTabComponent).cancel.subscribe($event => {
      if ($event == 'close') {
        this.modalRef.hide();
        this.modalRef = null;
      } else {
        this.cancelClickHandler();
      }
    });
    (this.modalRef.content as FormConfigTabComponent).options = this.options;
    (this.modalRef.content as FormConfigTabComponent).activeComponent = this.activeComponent;
    (this.modalRef.content as FormConfigTabComponent).onComponentSelect.subscribe($event => this.editExistingComponent($event));
    (this.modalRef.content as FormConfigTabComponent).delete.subscribe($event => this.deleteControl($event));
    (this.modalRef.content as FormConfigTabComponent).save.subscribe($event => this.addNewControl($event));
    (this.modalRef.content as FormConfigTabComponent).moveDown.subscribe($event => this.moveDownControl($event));
    (this.modalRef.content as FormConfigTabComponent).moveUp.subscribe($event => this.moveUpControl($event));
  }

  addNewControl($event: { controllerData: DynamicFormOption, formGen: any }) {
    if (this.saveButtonLabel === 'Add') {
      const isUniqueName = (this.options.filter(value => (value.name === $event.controllerData.name)).length === 0);
      if (isUniqueName) {
        $event.controllerData.id = new Date().getTime().toString();
        this.options.push($event.controllerData);
        this.cancelClickHandler();
      } else {
        alert('Already Controller exists with same name.');
      }
    } else {
      const isUniqueName = (this.options.filter(value => (this.controlInUpdate.id !== $event.controllerData.id && value.name === $event.controllerData.name)).length === 0);
      if (isUniqueName) {
        for (let i = 0; i < this.options.length; i++) {
          if (this.options[i].name === this.controlInUpdate.name) {
            this.options[i] = $event.controllerData;
          }
        }
        this.cancelClickHandler();
      } else {
        alert('Already Controller exists with same name.');
      }
    }
  }

  cancelClickHandler() {
    this.activeComponent = null;
    this.controlInUpdate = null;
    this.saveButtonLabel = 'Add';
    (this.modalRef.content as FormConfigTabComponent).saveButtonLabel = 'Add';
    (this.modalRef.content as FormConfigTabComponent).options = this.options;
    (this.modalRef.content as FormConfigTabComponent).activeComponent = this.activeComponent;
    this.modalRef.content.formRef.form.reset();
    this.resetForm = false;
    setTimeout(() => {
      this.resetForm = true;
    });
  }

  editExistingComponent($event: { option: DynamicFormOption, formGen: any }) {
    this.activeComponent = $event.option.name;
    $event.formGen.data = JSON.parse(JSON.stringify($event.option));
    this.controlInUpdate = JSON.parse(JSON.stringify($event.option));
    this.saveButtonLabel = 'Update';
    (this.modalRef.content as FormConfigTabComponent).saveButtonLabel = 'Update';
    (this.modalRef.content as FormConfigTabComponent).activeComponent = this.activeComponent;
  }

  deleteControl($event: DynamicFormOption) {
    const isConformed = confirm('Are you sure ! do you want delete?');
    if (isConformed) {
      for (let i = this.options.length - 1; i >= 0; i--) {
        if (this.options[i].id === $event.id) {
          this.options.splice(i, 1);
        }
      }
      this.cancelClickHandler();
    }
  }

  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      let k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  }

  moveDownControl($event: DynamicFormOption) {
    let oldIndex = -1;
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].id === $event.id) {
        oldIndex = i;
        break;
      }
    }
    this.array_move(this.options, oldIndex, oldIndex + 1);
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].index = i;
    }
  }

  moveUpControl($event: DynamicFormOption) {
    let oldIndex = -1;
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].id === $event.id) {
        oldIndex = i;
        break;
      }
    }
    this.array_move(this.options, oldIndex, oldIndex - 1);
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].index = i;
    }
  }
}
