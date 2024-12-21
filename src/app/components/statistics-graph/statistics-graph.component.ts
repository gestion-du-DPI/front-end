import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-statistics-graph',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  template: `
    <canvasjs-chart
      [options]="chartOptions"
      [styles]="{ width: '800px', height: '250px' }">
    </canvasjs-chart>
  `,
})
export class StatisticsGraphComponent {
  chartOptions = {
    animationEnabled: true,
    theme: 'light2',
    
    axisX: {
      valueFormatString: 'MMM',
      title: 'Months',
    },
    axisY: {
      title: 'Count',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: function (e: any) {
        if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      },
    },
    data: [
      {
        type: 'line',
        showInLegend: true,
        name: 'Patients',
        xValueFormatString: 'MMM YYYY',
        dataPoints: [
          { x: new Date(2024, 0), y: 100 }, // Jan
          { x: new Date(2024, 1), y: 120 }, // Feb
          { x: new Date(2024, 2), y: 130 }, // Mar
          { x: new Date(2024, 3), y: 140 }, // Apr
          { x: new Date(2024, 4), y: 150 }, // May
          { x: new Date(2024, 5), y: 160 }, // Jun
          { x: new Date(2024, 6), y: 170 }, // Jul
          { x: new Date(2024, 7), y: 180 }, // Aug
          { x: new Date(2024, 8), y: 190 }, // Sep
          { x: new Date(2024, 9), y: 200 }, // Oct
          { x: new Date(2024, 10), y: 210 }, // Nov
          { x: new Date(2024, 11), y: 220 }, // Dec
        ],
      },
      {
        type: 'line',
        showInLegend: true,
        name: 'Consultations',
        dataPoints: [
          { x: new Date(2024, 0), y: 90 }, // Jan
          { x: new Date(2024, 1), y: 110 }, // Feb
          { x: new Date(2024, 2), y: 100 }, // Mar
          { x: new Date(2024, 3), y: 130 }, // Apr
          { x: new Date(2024, 4), y: 140 }, // May
          { x: new Date(2024, 5), y: 150 }, // Jun
          { x: new Date(2024, 6), y: 145 }, // Jul
          { x: new Date(2024, 7), y: 170 }, // Aug
          { x: new Date(2024, 8), y: 160 }, // Sep
          { x: new Date(2024, 9), y: 180 }, // Oct
          { x: new Date(2024, 10), y: 190 }, // Nov
          { x: new Date(2024, 11), y: 195 }, // Dec
        ],
      },
    ],
  };
}
