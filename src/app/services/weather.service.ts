import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherApiBaseUrl = 'https://open-weather13.p.rapidapi.com';
  private XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  private XRapidAPIHostHeaderValue = 'open-weather13.p.rapidapi.com';
  private XRapidAPIKeyHeaderName = 'X-RapidAPI-Key';
  private XRapidAPIKeyHeaderValue = 'f0d38ec440msh496cb250d4dfa8bp1040e6jsnebabc62dbaaa';

  constructor(private http: HttpClient) { }


  getWeatherData(cityName:string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.weatherApiBaseUrl+'/city/'+cityName, {
      headers: new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
    });
   }
}
