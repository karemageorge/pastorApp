import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {
  groups: any = []

  error = ""
  message : any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    console.log(form.value)
    this.http.post(environment.base_url+'/pastors/sendsms', form.value).subscribe(
      responseData => {
        console.log(responseData)
        this.message = responseData
        form.reset()
      })
  }

}
