import { Component } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-columbia',
  templateUrl: './columbia.component.html',
  styleUrls: ['./columbia.component.scss']
})
export class ColumbiaComponent {
  columbiaForecast: any;
  columbiaWeather: string = 'LWX';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getColumbiaWeatherForecast().subscribe(
      data => {
        this.columbiaForecast = data;
        console.log(this.columbiaForecast);
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
