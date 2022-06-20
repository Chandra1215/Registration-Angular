import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-minsalary',
  templateUrl: './minsalary.component.html',
  styleUrls: ['./minsalary.component.scss']
})
export class MinsalaryComponent implements OnInit {
  MinEmp:any;

  constructor(private http:HttpClient,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.GetMinSalary();
  }
  GetMinSalary()
  {
    this.userService.GetMinSalary().subscribe(reponse =>{
      this.MinEmp=reponse;
      console.log(this.MinEmp);
    },error =>{
      console.log(error);
    });
  }

}
