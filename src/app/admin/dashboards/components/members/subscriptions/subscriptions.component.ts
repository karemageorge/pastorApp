import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LayoutService } from 'src/app/admin/layout/services/layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  members : any = []
  pastorinfo : any 
  constructor(private http : HttpClient, private layoutService: LayoutService) { }

  ngOnInit() {
    this.http.get<{ [key:string]: [] }>(environment.base_url+'/pastors/getinfo').subscribe( groupData =>{
      this.pastorinfo = groupData 
      console.log(groupData)
    }  )

    this.http.get<{ [key:string]: [] }>(environment.base_url+'/pastors/subscription').pipe(map(
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
      console.log(this.members)
    }  )

  }
  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

}
