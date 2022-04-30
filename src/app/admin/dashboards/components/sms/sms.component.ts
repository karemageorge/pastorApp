import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
  }
  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }
}
