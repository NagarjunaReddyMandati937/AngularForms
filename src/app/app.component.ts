import { Component } from '@angular/core';
import {employee} from '../model/employee.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee = new employee();
  dataArray = [];

  ngOnInit() {
    this.employee = new employee();
    this.dataArray.push(this.employee);
  }
  addForm() {
    this.employee = new employee();
    this.dataArray.push(this.employee);
  }
  removeForm(index) {
    this.dataArray.splice(index,1);

  }
  onSubmit() {
    console.log(this.dataArray);
  }
}
