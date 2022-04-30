import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
