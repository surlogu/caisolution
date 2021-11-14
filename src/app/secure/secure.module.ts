import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPageComponent, ViewPageComponent } from './list-page/list-page.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListPageComponent,
    ViewPageComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    AngularMaterialModule
  ],
  entryComponents: [ViewPageComponent]
})
export class SecureModule { }
