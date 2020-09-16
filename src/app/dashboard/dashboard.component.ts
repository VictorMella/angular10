import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ciudad = '';
  weather: [] = [];
  query = false;
  temperatura: number;
  humedad: number;
  sensacion: number;
  clima: string;

  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {}

  getWeather() {
    this.climaService.getClima(this.ciudad).subscribe((item) => {
      this.temperatura = item.main.temp - 273;
      this.sensacion = item.main.feels_like - 273;
      this.humedad = item.main.humidity;
      this.clima = this.transfomarTextoClima(item.weather[0].description);
      this.query = true;
    }, 
    err => {
      console.log(err)
      alert('No se ha encontrado esa ciudad')
      this.query = false;
      this.ciudad = '';
    });
  }

  transfomarTextoClima(clima) {
    return clima.charAt(0).toUpperCase() + clima.substr(1).toLowerCase();
  }
}
