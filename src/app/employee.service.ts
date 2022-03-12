import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' // this is something that actually makes a call
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { } //create a var and assigne that package to the var

  getEmployeesList =  () => {
    let getEmployeeURL = 'http://localhost:8000/employees'
    return this.http.get(getEmployeeURL)
  }
  getEmployeesById =  (id: string) => {
    let getEmployeeURL = `http://localhost:8000/employees/${id}`
    return this.http.get(getEmployeeURL)
  }
  postEmployees =  (employee: Object) => {
    let getEmployeeURL = `http://localhost:8000/employees`
    return this.http.post(getEmployeeURL, employee)
  }
  deleteEmployeesById =  (id: string) => {
    console.log('deleting....')
    let getEmployeeURL = `http://localhost:8000/employees/${id}`
    return this.http.delete(getEmployeeURL)
  }

}
