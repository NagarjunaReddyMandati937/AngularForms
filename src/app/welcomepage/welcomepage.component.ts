import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  title="List of Employees"
employeeId =[];
employeeName=[];
employeeSalary=[];
employeeLocation=[];

  constructor() { }

  ngOnInit() {
  }

}
