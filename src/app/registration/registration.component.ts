import { Component, OnInit } from '@angular/core';
import { IUser } from '../Models/IUser';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { UserServiceService } from '../Services/user-service.service';
import { ICountry } from '../Models/ICountry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  countries:ICountry[];
  public registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService:UserServiceService, private route:Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstname:['',Validators.required,],
      lastname:['',Validators.required],
      emailid:['',Validators.required],
      mobileno:['',Validators.required],
      gender:['',Validators.required],
      country:['',Validators.required]
    })
    this.getCountries();
  }
  onRegister()
  {
     this.userService.addUser(this.registerForm.value).subscribe(result =>{
       alert("User Added Successfully")
       this.registerForm.reset();
     this.route.navigate(['userdetails']);
     })
    //  console.log(this.registerForm)
  }
  getCountries(){
    this.userService.getCountries().subscribe(response =>{
      this.countries=response;
      // console.log(this.countries);
    },error =>{
      console.log(error)
    });
  }
  restAll(){
    this.registerForm.reset;
  }

  
}
