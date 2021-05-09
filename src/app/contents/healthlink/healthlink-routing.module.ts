import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthlinkComponent } from './healthlink.component';
import { HealthStatusComponent } from './health-status/health-status.component';
import { HealthMoodComponent } from './health-mood/health-mood.component';
import { HealthStepComponent } from './health-step/health-step.component';
import { HealthSleepComponent } from './health-sleep/health-sleep.component';

const routes: Routes = [
  {
    path: '', component: HealthlinkComponent, children: [
      { path: 'status', component: HealthStatusComponent },
      { path: 'mood', component: HealthMoodComponent },
      { path: 'step', component: HealthStepComponent },
      { path: 'sleep', component: HealthSleepComponent },
      { path: '', redirectTo: 'status', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthlinkRoutingModule { }
