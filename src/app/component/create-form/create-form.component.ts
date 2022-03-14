import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  id : string = ''
  name : string = ''
  department: string = ''
  role : string = ''
  address : string = ''
  salary : string = ''
  email : string = ''
  phone : string = ''
  isCreate : boolean = true
  constructor(private employee : EmployeeService, private router: Router, private activeRoute : ActivatedRoute) { }
  getFormValue = () => {
    const employee : Object = {
      id: this.id,
      name: this.name,
      address: this.address,
      designation: {
          department: this.department,
          role: this.role
      },
      salary: this.salary,
      email: this.email,
      phone: this.phone
  }
  if(this.isCreate){
    this.employee.postEmployees(JSON.stringify(employee)).subscribe(employee =>{
      this.router.navigateByUrl("all")
    }) 
  } else {
    this.employee.updateEmployees(JSON.stringify(employee), this.id).subscribe(employee =>{
      this.router.navigateByUrl("all")
    }) 
  }
     
  }
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params =>{
      this.isCreate = params["id"] ? false : true
    })
    this.id = history.state.id
    this.name = history.state.name
    this.department = history.state.designation?.department
    this.role = history.state.designation?.role
    this.address = history.state.address
    this.salary = history.state.salary
    this.email = history.state.email
    this.phone = history.state.phone
  }

}
