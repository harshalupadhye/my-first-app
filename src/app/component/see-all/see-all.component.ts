import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.scss']
})
export class SeeAllComponent implements OnInit {
  employeeList: any 
  isSearch : boolean = false
  id : string = ''
  url : string = ''

  constructor(public employees : EmployeeService, private activeRoutes : ActivatedRoute, private router: Router) {}

  editEmployee = (employee: any) =>{
    console.log(employee)
    this.url = `create?id=${employee.id}`
    this.router.navigateByUrl(this.url, {state: employee})
  }
  deleteEmployee = (id: string) =>{
     this.employees.deleteEmployeesById(id).subscribe((list) =>{
       console.log(typeof(list))
      this.employeeList =  list
      console.log(this.employeeList)
    })
  }
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
