import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  employee: any;
  id: string = ''
  url: string = ''
  err: string = ''
  constructor(public employees: EmployeeService, private router: Router) {}

  getId = (id:string) => {
    this.err = ''
    this.id = id
    this.url =`all/?id=${this.id}`
    
    };

  getEmployee = () =>{
    this.employees.getEmployeesById(this.id).subscribe((list) => {
      if(list === null){
        this.err = 'No employee Found'
        return 
      }
      this.employee = list;
      this.router.navigateByUrl(this.url)
      console.log(this.employee);
    });
  }
  
  ngOnInit(): void {
  
  }
}
