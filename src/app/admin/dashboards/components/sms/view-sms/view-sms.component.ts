import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-sms',
  templateUrl: './view-sms.component.html',
  styleUrls: ['./view-sms.component.scss']
})
export class ViewSmsComponent implements OnInit {

  smss: any = []
  error = ""

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ [key:string]: [] }>(environment.base_url+'/pastors/sendsms').pipe(map(
      responseData => {
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            this.smss = responseData[key]
            let i = 1
            for (var member of this.smss) {
              member["id"] = i
              i=i+1
         }
          } 
        }
       return this.smss
      }
    )).subscribe( groupData =>{
      this.smss = groupData 
      console.log(groupData)
    }  )
  }

}
