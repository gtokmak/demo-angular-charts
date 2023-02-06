import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'chart-polar-doughnut',
  templateUrl: './chart-polar-doughnut.component.html',
  styleUrls: ['./chart-polar-doughnut.component.css']
})
export class ChartPolarDoughnutComponent {

  public doughnutChartLabels: string[] = [ 'Faz-1', 'Faz-2', 'Faz-3','Faz-4' ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 40, 25, 50, 17 ] },
      { data: [ 35, 12, 31, 23 ] },
      { data: [ 32, 34, 54, 17 ] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
    console.log("clicked");
  }
  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
