import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
  }
  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }
}
