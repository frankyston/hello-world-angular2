import { Component, EventEmitter } from '@angular/core';
import {Contact} from '../contact';

@Component({
  moduleId: module.id,
  selector: 'form-contact',
  templateUrl: 'form-contact.component.html',
  styleUrls: ['form-contact.component.css'],
  outputs: ['outputContact']
})
export class FormContactComponent {
  outputContact = new EventEmitter();
  contact: Contact = new Contact();
  constructor() {
  }

  onsaveContact(){
    if (this.contact.name == "" && this.contact.fone == "") {
      alert("Nome e telefone são obrigatórios");
    }else{
      this.outputContact.next(this.contact);
      this.contact = new Contact();
    }
  }

}
