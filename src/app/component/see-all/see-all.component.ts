import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.scss']
})
export class SeeAllComponent implements OnInit {
  employeeList: any
  isSearch : boolean = false
  id : string = ''
  constructor(public employees : EmployeeService, private activeRoutes : ActivatedRoute) {}

 ngOnInit() {
   this.activeRoutes.queryParams.subscribe(param =>{
   this.id = param["id"]
   this.isSearch = param["id"] ? true : false
   })
   if(this.isSearch){
     this.employees.getEmployeesById(this.id).subscribe(list =>{
       this.employeeList = [list]
     })
     return
   }
    this.employees.getEmployeesList().subscribe(list => {
      this.employeeList = list
    })
  }

}
