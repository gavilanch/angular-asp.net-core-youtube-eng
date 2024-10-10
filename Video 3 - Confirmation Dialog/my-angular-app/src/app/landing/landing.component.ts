import { Component, inject } from '@angular/core';
import { WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  weatherForecasts: any[] = [];

  weatherForecastService = inject(WeatherforecastService);

  constructor(){
    this.weatherForecastService.get().subscribe(weatherForecasts => {
      this.weatherForecasts = weatherForecasts;
    });
  }
}
