import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartPolarAreaComponent } from './chart-polar-area/chart-polar-area.component';
import { ChartPolarDoughnutComponent } from './chart-polar-doughnut/chart-polar-doughnut.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ChartComponent,
    NavbarComponent,
    ChartLineComponent,
    ChartBarComponent,
    ChartRadarComponent,
    ChartPieComponent,
    ChartPolarAreaComponent,
    ChartPolarDoughnutComponent
  ],
  imports: [
     BrowserModule,CommonModule, NgChartsModule
  ],
  exports:[ ChartComponent ]
})
export class ChartModule { }
