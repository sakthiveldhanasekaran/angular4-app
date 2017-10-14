import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateForm(user) {
    if(user.name == 'undefined' || user.password == 'undefined' || user.username == 'undefined' || user.email == 'undefined') {
      return false;
    }
  }
}
