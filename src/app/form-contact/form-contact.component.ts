import { Component, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'form-contact',
  templateUrl: 'form-contact.component.html',
  styleUrls: ['form-contact.component.css'],
  outputs: ['outputContact']
})
export class FormContactComponent {
  outputContact = new EventEmitter();
  contact: any = {};
  constructor() {
    this.contact.name = "";
    this.contact.fone = "";
  }

  onsaveContact(){
    this.outputContact.next(this.contact);
  }

}
