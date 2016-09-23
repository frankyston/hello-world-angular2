import { Component } from '@angular/core';
import { ListContactComponent } from './list-contact/list-contact.component';
import { FormContactComponent } from './form-contact/form-contact.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ListContactComponent, FormContactComponent]
})
export class AppComponent {
  title = 'Meu primeiro app Angular!';
  contacts: any = [];

  constructor(){
    this.contacts.push({name: "Frankyston", fone: "9192-9394", date: new Date()});
    this.contacts.push({name: "Érico", fone: "9192-9394", date: new Date()});
    this.contacts.push({name: "Patrick", fone: "9192-9394", date: new Date()});
    console.log(this.contacts);
  }

  pushContact(contact){
    contact.date = new Date();
    this.contacts.push(contact);
    console.log(JSON.stringify(contact));
  }


}
