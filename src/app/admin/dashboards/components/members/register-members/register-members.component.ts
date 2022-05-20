import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-members',
  templateUrl: './register-members.component.html',
  styleUrls: ['./register-members.component.scss']
})
export class RegisterMembersComponent implements OnInit {

  groups: any = []
  error = ""
  message : any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get<{ [key:string]: [] }>(environment.base_url+'/pastors/groups').pipe(map(
    //   responseData => {
    //     for (const key in responseData){
    //       if (responseData.hasOwnProperty(key)){
    //         this.groups = responseData[key]
    //       } 
    //     }
    //    return this.groups
    //   }
    // )).subscribe( groupData =>{
    //   this.groups = groupData 
    //   console.log(groupData)
    // }  )
  }

  onSubmit( form: NgForm){
    console.log(form.value)
    this.http.post(environment.base_url+'/pastors/members', form.value).subscribe(
      responseData => {
        console.log(responseData)
        this.message = responseData
        form.reset()
      })
    }

}
