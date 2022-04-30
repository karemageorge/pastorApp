import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = true
  error : string = ""

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit(form: NgForm){
    console.log(form.value)
    const email = form.value.email
    const password = form.value.password

    this.authservice.login(email, password).subscribe(
      (resData: any) => {
          console.log(resData)
          if (resData.error){
            this.error = resData.error
          }
          else {
          localStorage.setItem('userdata', resData.data.token)
          this.router.navigate(['/admin/'])
          }
          
      }, 
      (error: any) => {
          console.log(error)
          this.error = "an error occured"
          
      })

  }

}
