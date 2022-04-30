import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupMembersComponent } from './group-members/group-members.component';
import { MembersComponent } from './members.component';
import { RegisterMembersComponent } from './register-members/register-members.component';
import { UploadMembersComponent } from './upload-members/upload-members.component';
import { ViewMembersComponent } from './view-members/view-members.component';


const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
    children: [
        { path: 'view', component: ViewMembersComponent, data: { title: ':: Devotional :: App ::' }},
        { path: 'register', component: RegisterMembersComponent, data: { title: ':: Devotional :: App ::' }},
        { path: 'upload', component: UploadMembersComponent, data: { title: ':: Devotional :: App ::' }},
        { path: 'group', component: GroupMembersComponent, data: { title: ':: Devotional :: App ::' }},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
