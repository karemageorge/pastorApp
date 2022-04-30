import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [DashboardComponent, IndexComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
