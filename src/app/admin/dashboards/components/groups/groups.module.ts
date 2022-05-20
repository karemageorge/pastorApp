import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { RegisterGroupsComponent } from './register-groups/register-groups.component';
import { ViewGroupsComponent } from './view-groups/view-groups.component';
import { GroupsComponent } from './groups.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorServiceService } from '../../services/token-interceptor-service.service';


@NgModule({
  declarations: [RegisterGroupsComponent, ViewGroupsComponent, GroupsComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    FormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorServiceService,
    multi: true
  }],
})
export class GroupsModule { }
