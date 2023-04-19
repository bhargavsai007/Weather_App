import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherApiBaseUrl = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
  private XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  private XRapidAPIHostHeaderValue = 'weatherapi-com.p.rapidapi.com';
  private XRapidAPIKeyHeaderName = 'X-RapidAPI-Key';
  private XRapidAPIKeyHeaderValue = 'f0d38ec440msh496cb250d4dfa8bp1040e6jsnebabc62dbaaa';

  constructor(private http: HttpClient) { }


  getWeatherData(cityName:string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.weatherApiBaseUrl+cityName, {
      headers: new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue)
    });
   }
}
