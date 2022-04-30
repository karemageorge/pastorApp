import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './layout/components/admin/admin.component';
import { OverlayMenuComponent } from './layout/components/overlay-menu/overlay-menu.component';
import { RightSidebarComponent } from './layout/components/right-sidebar/right-sidebar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LeftSidebarComponent } from './layout/components/left-sidebar/left-sidebar.component';
import { SettingsComponent } from './layout/components/settings/settings.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, OverlayMenuComponent, RightSidebarComponent, LeftSidebarComponent, SettingsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class AdminModule { }
