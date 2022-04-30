import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
  }
  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }
}
