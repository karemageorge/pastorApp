import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-groups',
  templateUrl: './register-groups.component.html',
  styleUrls: ['./register-groups.component.scss']
})
export class RegisterGroupsComponent implements OnInit {

  error = ""
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value)
    this.http.post(environment.base_url+'/pastors/groups', form.value).subscribe(
      responseData => {
        console.log(responseData)
        form.reset()
      })
  }

}
