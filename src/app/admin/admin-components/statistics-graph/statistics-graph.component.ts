import { Component, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DashboardService } from '../../../services/admin/dashboard/dashboard.service';

@Component({
  selector: 'app-statistics-graph',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  template: `
    <canvasjs-chart
      [options]="chartOptions"
      [styles]="{ width: '100%', height: '250px' }"
    >
    </canvasjs-chart>
  `,
})
export class StatisticsGraphComponent implements OnInit {
  chartOptions: any = {
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
        if (
          typeof e.dataSeries.visible === 'undefined' ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      },
    },
    data: [],
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    const cachedData = this.dashboardService.getcachedData();

    if ('stats' in cachedData) {
      this.updateChartData(cachedData.stats);
    } else {
      cachedData.subscribe((dataFetched: any) => {
        if ('stats' in dataFetched) {
          this.updateChartData(dataFetched.stats);
        }
      });
    }
  }

  updateChartData(
    stats: Array<{
      [month: string]: { patients: number; consultations: number };
    }>
  ) {
    const patientsDataPoints: { x: Date; y: number }[] = [];
    const consultationsDataPoints: { x: Date; y: number }[] = [];

    stats.forEach((stat) => {
      const [month, data] = Object.entries(stat)[0];
      const monthDate = new Date(`${month} 1, ${new Date().getFullYear()}`); // Convert month to Date
      patientsDataPoints.push({ x: monthDate, y: data.patients });
      consultationsDataPoints.push({ x: monthDate, y: data.consultations });
    });

    this.chartOptions.data = [
      {
        type: 'line',
        showInLegend: true,
        name: 'Patients',
        xValueFormatString: 'MMM YYYY',
        dataPoints: patientsDataPoints,
      },
      {
        type: 'line',
        showInLegend: true,
        name: 'Consultations',
        xValueFormatString: 'MMM YYYY',
        dataPoints: consultationsDataPoints,
      },
    ];

    // Trigger change detection to rerender the chart
    setTimeout(() => {
      this.chartOptions = { ...this.chartOptions };
    }, 0);
  }
}
