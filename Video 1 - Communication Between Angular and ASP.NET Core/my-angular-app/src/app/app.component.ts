import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherforecastService } from './weatherforecast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
  weatherForecasts: any[] = [];

  weatherForecastService = inject(WeatherforecastService);

  constructor(){
    this.weatherForecastService.get().subscribe(weatherForecasts => {
      this.weatherForecasts = weatherForecasts;
    });
  }

}
