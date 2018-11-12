import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  employees = [
    'Sam', "Smith", 'George'
  ];

  getData() {
    return "This is my Data!";
  }
}
