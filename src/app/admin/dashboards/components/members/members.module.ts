import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupMembersComponent } from './group-members/group-members.component';
import { MembersComponent } from './members.component';
import { RegisterMembersComponent } from './register-members/register-members.component';
import { UploadMembersComponent } from './upload-members/upload-members.component';
import { ViewMembersComponent } from './view-members/view-members.component';

import { MembersRoutingModule } from './members-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GroupMembersComponent, MembersComponent,RegisterMembersComponent,UploadMembersComponent,ViewMembersComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule
  ]
})
export class MembersModule { }
