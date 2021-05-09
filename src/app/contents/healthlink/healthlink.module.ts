import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthlinkRoutingModule } from './healthlink-routing.module';
import { HealthlinkComponent } from './healthlink.component';
import { HealthCalorieComponent } from './health-calorie/health-calorie.component';
import { HealthHeartrateComponent } from './health-heartrate/health-heartrate.component';
import { HealthStatusComponent } from './health-status/health-status.component';
import { HealthMoodComponent } from './health-mood/health-mood.component';
import { HealthStepComponent } from './health-step/health-step.component';
import { HealthSleepComponent } from './health-sleep/health-sleep.component';

@NgModule({
  declarations: [
    HealthlinkComponent,
    HealthCalorieComponent,
    HealthHeartrateComponent,
    HealthStatusComponent,
    HealthMoodComponent,
    HealthStepComponent,
    HealthSleepComponent,
  ],
  imports: [
    CommonModule,
    HealthlinkRoutingModule
  ],
})
export class HealthlinkModule { }
