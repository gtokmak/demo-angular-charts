import { Component } from "@angular/core";

@Component({
    selector: 'chart',
    templateUrl: 'chart.component.html'
})

export class ChartComponent {
    public charLine: Boolean = true;
    public charBar: Boolean = true;
    public charPie: Boolean = true;
    public charPolarArea: Boolean = true;
    public charPolarDoughnut: Boolean = true;
    public charRadar: Boolean = true;

    constructor(){
    }

    showAllChart(){
        this.charLine=true;
        this.charBar=true;
        this.charPie=true;
        this.charPolarArea=true;
        this.charPolarDoughnut=true;
        this.charRadar=true;
    }
}