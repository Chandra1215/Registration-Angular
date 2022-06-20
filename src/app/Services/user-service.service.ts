import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ICountry } from '../Models/ICountry';
import { IEmploye } from '../Models/IEmploye';
import { IUser } from '../Models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl='https://localhost:44335/api/';

  constructor(private http:HttpClient) { }

  getUsers()
  { 
        return this.http.get<IUser[]>(this.baseUrl+'Registration/getusers');
  }
  addUser(data:any)
  {
    return this.http.post(this.baseUrl+'Registration/adduser',data)
    .pipe(map((result:any)=>{
      return result;
    }))
  }

  deleteUser(data:IUser)
  {
    return this.http.delete(this.baseUrl+'Registration/'+data.registrationId).subscribe(()=>{})
  }

  getCountries()
  {
    return this.http.get<ICountry[]>(this.baseUrl+'Registration/countries');
  }

  GetEmployees()
  {
    return this.http.get<IEmploye[]>(this.baseUrl+'Registration/GetEmployees')
  }

  GetMaxSalary()
  {
    return this.http.get<any>(this.baseUrl+'Registration/getMaximumsalary')
  }
  GetMinSalary()
  {
    return this.http.get<any>(this.baseUrl+'Registration/getminsalary')
  }
}
