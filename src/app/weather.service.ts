import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private kansasUrl = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';
  private columbiaUrl = 'https://api.weather.gov/gridpoints/LWX/31,80/forecast';
  constructor(private http: HttpClient) { }

  getKansasWeatherForecast(): Observable<any> {
    return this.http.get<any>(this.kansasUrl);
  }

  getColumbiaWeatherForecast(): Observable<any> {
    return this.http.get<any>(this.columbiaUrl);
  }
}
