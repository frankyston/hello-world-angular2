import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'list-contact',
  templateUrl: 'list-contact.component.html',
  styleUrls: ['list-contact.component.css'],
  inputs: ['contacts']
})
export class ListContactComponent {
  constructor() {
  }

}
