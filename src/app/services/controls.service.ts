import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DynamicFormOption} from '../dynamic-form/dynamic-form.component';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  itemRef: Subject<DynamicFormOption[]> = new Subject<DynamicFormOption[]>();
  private items: DynamicFormOption[] = [];

  constructor() {
    this.init();
  }

  init() {
    this.itemRef.next(this.items);
  }

  add(newController: DynamicFormOption): { status: boolean, message: string } {
    const isUniqueName = (this.items.filter(value => (value.name === newController.name)).length === 0);
    if (isUniqueName) {
      newController.id = new Date().getTime().toString();
      this.items.push(newController);
      this.itemRef.next(this.items);
      return {status: true, message: 'successfully added'};
    } else {
      return {status: false, message: 'Already Controller exists with same name.'};
    }
  }

  update(newController: DynamicFormOption): { status: boolean, message: string } {
    const isUniqueName = (this.items.filter(value => (value.id !== newController.id && value.name === newController.name)).length === 0);
    if (isUniqueName) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === newController.name) {
          this.items[i] = newController;
        }
      }
      this.itemRef.next(this.items);
      return {status: true, message: 'successfully added'};
    } else {
      return {status: false, message: 'Already Controller exists with same name.'};
    }
  }

  remove(controller: DynamicFormOption) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].id === controller.id) {
        this.items.splice(i, 1);
      }
    }
    this.itemRef.next(this.items);
  }

  moveDown(controller: DynamicFormOption) {

    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].index === controller.index + 1) {
        this.items[i].index = controller.index - 1;
      }
    }
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].id === controller.id) {
        this.items[i].index = controller.index + 1;
      }
    }
    this.itemRef.next(this.items);
  }

  moveUp(controller: DynamicFormOption) {

    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].index === controller.index - 1) {
        this.items[i].index = controller.index + 1;
      }
    }
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].id === controller.id) {
        this.items[i].index = controller.index - 1;
      }
    }
    this.itemRef.next(this.items);
  }

}
