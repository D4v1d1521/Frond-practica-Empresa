import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudUsersComponent } from './components/crudUsers/crudUsers.component';
import { CrudAreasComponent } from './components/crudAreas/crudAreas.component';

import { Router } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'users', component: CrudUsersComponent },
  { path: 'areas', component: CrudAreasComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
