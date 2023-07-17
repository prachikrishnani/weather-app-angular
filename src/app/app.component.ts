import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'nagercoil';
  weatherdata?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = '';
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response: any) => {
          this.weatherdata = response;
          console.log(response);
        }, error: (error: HttpErrorResponse) => {
          alert("Didn't got it, Please write again")
        }
      });
  }
}
