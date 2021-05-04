import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './contents/dashboard/dashboard.component';
import { DieatComponent } from './contents/dieat/dieat.component';
import { HealthlinkComponent } from './contents/healthlink/healthlink.component';
import { HydrogaugesComponent } from './contents/hydrogauges/hydrogauges.component';
import { RamzComponent } from './contents/ramz/ramz.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dieat', component: DieatComponent },
  { path: 'healthlink', component: HealthlinkComponent },
  { path: 'ramz', component: RamzComponent },
  { path: 'hydrogauges', component: HydrogaugesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
