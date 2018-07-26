import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
firstName:string="Thomas";
lastName:string="Edison";
jobTitle:string="Manager";
salary:number=15000;
}
