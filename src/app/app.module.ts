import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule}  from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalaryComponent } from './salary/salary.component';
import { MaxsalaryComponent } from './maxsalary/maxsalary.component';
import { MinsalaryComponent } from './minsalary/minsalary.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDetailsComponent,
    RegistrationComponent,
    SalaryComponent,
    MaxsalaryComponent,
    MinsalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
