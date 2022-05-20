import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import { ViewSmsComponent } from './view-sms/view-sms.component';
import { SendSmsComponent } from './send-sms/send-sms.component';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [ SmsComponent, ViewSmsComponent, SendSmsComponent, ScheduleComponent],
  imports: [
    CommonModule,
    SmsRoutingModule,
    FormsModule
  ]
})
export class SmsModule { }
