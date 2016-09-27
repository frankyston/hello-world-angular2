export class Contact {

  id: number;
  name: string = '';
  fone: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
