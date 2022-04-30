import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups.component';
import { RegisterGroupsComponent } from './register-groups/register-groups.component';
import { ViewGroupsComponent } from './view-groups/view-groups.component';


const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    children: [
        { path: 'view', component: ViewGroupsComponent, data: { title: ':: Devotional :: App ::' }},
        { path: 'register', component: RegisterGroupsComponent, data: { title: ':: Devotional :: App ::' }},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
