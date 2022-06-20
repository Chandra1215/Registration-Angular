import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaxsalaryComponent } from './maxsalary/maxsalary.component';
import { MinsalaryComponent } from './minsalary/minsalary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { SalaryComponent } from './salary/salary.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'userdetails',component:UserDetailsComponent},
  {path:'register',component:RegistrationComponent},
  {path:'salary',component:SalaryComponent},
  {path:'MaxSalary',component:MaxsalaryComponent},
  {path:'MinSalary',component:MinsalaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
