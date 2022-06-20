import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-maxsalary',
  templateUrl: './maxsalary.component.html',
  styleUrls: ['./maxsalary.component.scss']
})
export class MaxsalaryComponent implements OnInit {
  MaxEmp:any

  constructor(private http:HttpClient,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.GetMaxSalary();
  }
  GetMaxSalary()
  {
    this.userService.GetMaxSalary().subscribe(response =>{
      this.MaxEmp=response;
    },error =>{
      console.log(error);
    });
  }


}
