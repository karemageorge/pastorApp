import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.scss']
})
export class ViewMembersComponent implements OnInit {

  members : any = []

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

    this.http.get<{ [key:string]: [] }>(environment.base_url+'/pastors/members').pipe(map(
      responseData => {
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            this.members = responseData[key]
            
            let i = 1
            for (var member of this.members) {
              member["id"] = i
              i=i+1
         }
          } 
        }
       return this.members
      }
    )).subscribe( groupData =>{
      this.members = groupData 
      console.log(groupData)
    }  )
  }
  

}
