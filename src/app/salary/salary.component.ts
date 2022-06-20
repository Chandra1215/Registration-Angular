import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmploye } from '../Models/IEmploye';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  employe:IEmploye[];
  MaxEmp:any;

  constructor(private http:HttpClient,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.GetEmployee();
  }
  GetEmployee()
  { 
    this.userService.GetEmployees().subscribe(response =>{
      this.employe=response;
    },error =>{
      console.log(error);
    });
  }
  
}
