import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _service: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.query = false;
    this.loading = true;

    this._service.getClima(this.ciudad).subscribe(data => {
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
      this.query = true;
      this.loading = false;   
    }, error => {
      this.loading = false;
      this.error();
    });
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }

}
