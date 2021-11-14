import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ProfileComponent } from './profile/profile.component';

export const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', label: ''},
  { path: 'dashboard', component: DashboardComponent, label: 'Dashboard' },
  { path: 'list-page', component: ListPageComponent, label: 'List Page' },
  { path: 'profile', component: ProfileComponent, label: 'Profile' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
