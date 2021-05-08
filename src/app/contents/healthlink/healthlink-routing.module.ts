import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthlinkComponent } from './healthlink.component';
import { HealthHeartrateComponent } from './health-heartrate/health-heartrate.component';
import { HealthStatusComponent } from './health-status/health-status.component';

const routes: Routes = [
  {
    path: '', component: HealthlinkComponent, children: [
      { path: 'status', component: HealthStatusComponent },
      { path: 'heartrate', component: HealthHeartrateComponent },
      { path: '', redirectTo: 'status', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthlinkRoutingModule { }
