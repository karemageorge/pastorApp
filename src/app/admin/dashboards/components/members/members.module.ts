import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupMembersComponent } from './group-members/group-members.component';
import { MembersComponent } from './members.component';
import { RegisterMembersComponent } from './register-members/register-members.component';
import { UploadMembersComponent } from './upload-members/upload-members.component';
import { ViewMembersComponent } from './view-members/view-members.component';

import { MembersRoutingModule } from './members-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorServiceService } from '../../services/token-interceptor-service.service';
import { TransactionsComponent } from './transactions/transactions.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';


@NgModule({
  declarations: [GroupMembersComponent, MembersComponent,RegisterMembersComponent,UploadMembersComponent,ViewMembersComponent, TransactionsComponent, SubscriptionsComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorServiceService,
    multi: true
  }],
})
export class MembersModule { }
