import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
      children: [
          { path: '', redirectTo:'index', pathMatch: 'full'},
          { path: 'index', component: IndexComponent, data: { title: ':: Devotional :: App ::' }},
          { path: 'members', loadChildren: () => import('./components/members/members.module').then(m => m.MembersModule)},
          { path: 'groups', loadChildren: () => import('./components/groups/groups.module').then(m => m.GroupsModule)},
          { path: 'sms', loadChildren: () => import('./components/sms/sms.module').then(m => m.SmsModule)}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
