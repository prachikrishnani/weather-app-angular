import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`http://api.weatherapi.com/v1/current.json?key=`, {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Key', 'dummy-key')
        .set('X-RapidAPI-Host', 'dummy-host'),
      params: new HttpParams()
        .set('q', cityName)
    })
  }
}
