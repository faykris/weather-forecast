import { Component } from '@angular/core'
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  kansasForecast: any;
  columbiaForecast: any;
  kansasWeather: string = 'TOP';
  columbiaWeather: string = 'LWX';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // this.weatherService.getKansasWeatherForecast().subscribe(
    //   data => {
    //     this.kansasForecast = data;
    //     console.log(this.kansasForecast);
    //   },
    //   error => {
    //     console.error('Error fetching weather data', error);
    //   }
    // );
    //
    // this.weatherService.getColumbiaWeatherForecast().subscribe(
    //   data => {
    //     this.columbiaForecast = data;
    //     console.log(this.columbiaForecast);
    //   },
    //   error => {
    //     console.error('Error fetching weather data', error);
    //   }
    // );
  }
}
