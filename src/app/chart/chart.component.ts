import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() data: any = null;
  @Input() chart: string = '';
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    const periods = this.data.properties.periods;
    const labels = periods.map((period: any) => period.name);
    const temperatures = periods.map((period: any) => period.temperature);
    const precipitations = periods.map((period: any) => period.probabilityOfPrecipitation?.value || 0);
    const humidity = periods.map((period: any) => period.relativeHumidity?.value || 0);

    new Chart(this.canvasRef.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Temperature (F)',
            data: temperatures,
            borderColor: 'rgb(192,75,173)',
            backgroundColor: 'rgba(192,75,186,0.2)',
            fill: false,
          },
          {
            label: 'Probability of Precipitation (%)',
            data: precipitations,
            borderColor: 'rgb(75,171,192)',
            backgroundColor: 'rgba(75,165,192,0.2)',
            fill: false,
          },
          {
            label: 'Relative Humidity (%)',
            data: humidity,
            borderColor: 'rgb(100,75,192)',
            backgroundColor: 'rgba(75,81,192,0.2)',
            fill: false,
          },
        ]
      },
      options: {
        responsive: true,
      }
    });
  }
}
