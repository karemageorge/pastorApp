import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LayoutService } from '../../../layout/services/layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  members : any = []
  pastorinfo : any 
  i = 0

  

  constructor(private layoutService: LayoutService, private http : HttpClient) { }

  ngOnInit() {
    this.http.get<{ [key:string]: [] }>(environment.base_url+'/pastors/getinfo').subscribe( groupData =>{
      this.pastorinfo = groupData 
      console.log(groupData)
    }  )

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

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

}
