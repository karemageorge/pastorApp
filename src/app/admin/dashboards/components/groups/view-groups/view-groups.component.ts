import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-groups',
  templateUrl: './view-groups.component.html',
  styleUrls: ['./view-groups.component.scss']
})
export class ViewGroupsComponent implements OnInit {

  

  groups : any = []
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ [key:string]: [] }>(environment.base_url+'/pastors/groups').pipe(map(
      responseData => {
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            this.groups = responseData[key]
            let i = 1
            for (var member of this.groups) {
              member["id"] = i
              i=i+1
         }
          } 
        }
       return this.groups
      }
    )).subscribe( groupData =>{
      this.groups = groupData 
      console.log(groupData)
    }  )
  }

}
