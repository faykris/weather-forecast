import { Component } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-kansas',
  templateUrl: './kansas.component.html',
  styleUrls: ['./kansas.component.scss']
})
export class KansasComponent {
  kansasForecast: any;
  kansasWeather: string = 'TOP';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getKansasWeatherForecast().subscribe(
      data => {
        this.kansasForecast = data;
        console.log(this.kansasForecast);
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
