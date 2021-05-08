import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './contents/dashboard/dashboard.component';
import { DieatComponent } from './contents/dieat/dieat.component';
// import { HealthlinkComponent } from './contents/healthlink/healthlink.component';
import { RamzComponent } from './contents/ramz/ramz.component';
import { HydrogaugesComponent } from './contents/hydrogauges/hydrogauges.component';
import { DashHealthlinkComponent } from './contents/dashboard/dash-healthlink/dash-healthlink.component';
import { DashDieatComponent } from './contents/dashboard/dash-dieat/dash-dieat.component';
import { DashHydrogaugesComponent } from './contents/dashboard/dash-hydrogauges/dash-hydrogauges.component';
import { DashRamzComponent } from './contents/dashboard/dash-ramz/dash-ramz.component';
// import { HealthCalorieComponent } from './contents/healthlink/health-calorie/health-calorie.component';
// import { HealthHeartrateComponent } from './contents/healthlink/health-heartrate/health-heartrate.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DieatComponent,
    // HealthlinkComponent,
    RamzComponent,
    HydrogaugesComponent,
    DashHealthlinkComponent,
    DashDieatComponent,
    DashHydrogaugesComponent,
    DashRamzComponent,
    // HealthCalorieComponent,
    // HealthHeartrateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
