import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendSmsComponent } from './send-sms/send-sms.component';
import { SmsComponent } from './sms.component';
import { ViewSmsComponent } from './view-sms/view-sms.component';


const routes: Routes = [
  {
    path: '',
    component: SmsComponent,
    children: [
        { path: 'send', component: SendSmsComponent, data: { title: ':: Devotional :: App ::' }},
        { path: 'view', component: ViewSmsComponent, data: { title: ':: Devotional :: App ::' }}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsRoutingModule { }
