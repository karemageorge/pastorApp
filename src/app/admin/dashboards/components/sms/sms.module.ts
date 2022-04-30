import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import { ViewSmsComponent } from './view-sms/view-sms.component';
import { SendSmsComponent } from './send-sms/send-sms.component';


@NgModule({
  declarations: [ SmsComponent, ViewSmsComponent, SendSmsComponent],
  imports: [
    CommonModule,
    SmsRoutingModule
  ]
})
export class SmsModule { }
