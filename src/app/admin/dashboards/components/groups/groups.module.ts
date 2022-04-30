import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { RegisterGroupsComponent } from './register-groups/register-groups.component';
import { ViewGroupsComponent } from './view-groups/view-groups.component';
import { GroupsComponent } from './groups.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterGroupsComponent, ViewGroupsComponent, GroupsComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    FormsModule
  ]
})
export class GroupsModule { }
