import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  apiKey = 'db2f007fd1a791ca92a7a433488ea8d2';
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + ciudad + '&appid=' + this.apiKey;
    return this.http.get(URL);
  }
}
