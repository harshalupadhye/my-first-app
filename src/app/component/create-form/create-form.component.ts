import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

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
  constructor(private employee : EmployeeService) { }
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
     this.employee.postEmployees(JSON.stringify(employee)).subscribe(employee =>{
       console.log(employee)
     }) 
  }
  ngOnInit(): void {
  }

}
