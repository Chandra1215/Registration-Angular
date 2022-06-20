import { Component, OnInit } from '@angular/core';
import { IUser } from '../Models/IUser';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
users:IUser[];
delete:any;
  

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(response =>{
      this.users=response;
      console.log(this.users);
    },error =>{
      console.log(error)
    });
  }

  deleteUser(registrationId:IUser){
    this.userService.deleteUser(registrationId);
    alert("user deleted successfully")
    this.getUsers();
  }
}
