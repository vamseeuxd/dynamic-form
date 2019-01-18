import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  itemRef: Subject<IFormData[]> = new Subject<IFormData[]>();
  private items: IFormData[] = [];

  constructor() {
    this.init();
  }

  init() {
    this.itemRef.next(this.items);
  }

  add(newForm: IFormData) {
    this.items.forEach(item => {
      item.isActive = false;
      this.update(item);
    });
    newForm.id = this.items.length.toString();
    newForm.isActive = true;
    this.items.push(newForm);
    this.itemRef.next(this.items);
  }

  remove(formToDelete: IFormData) {
    this.items = this.items.filter(item => item.id !== formToDelete.id);
    this.itemRef.next(this.items);
  }

  update(formToUpdate: IFormData) {
    this.items.forEach(item => {
      if (item.id === formToUpdate.id) {
        item = formToUpdate;
      }
    });
    this.itemRef.next(this.items);
  }

  setActive(formToActive: IFormData) {
    this.items.forEach(item => {
      item.isActive = false;
      if (item.id === formToActive.id) {
        item.isActive = true;
      }
    });
    this.itemRef.next(this.items);
  }

  updateEdit(isEdit: boolean, formToUpdate: IFormData) {
    this.items.forEach(item => {
      item.isEdit = false;
      if (item.id === formToUpdate.id) {
        item.isEdit = isEdit;
      }
    });
    this.itemRef.next(this.items);
  }

  updateName(newName: string, formToUpdate: IFormData) {
    this.items.forEach(item => {
      item.isActive = false;
      if (item.id === formToUpdate.id) {
        item.name = newName;
      }
    });
    this.itemRef.next(this.items);
  }
}

export interface IFormData {
  id?: string;
  name: string;
  isActive?: boolean;
  isEdit?: boolean;
}
