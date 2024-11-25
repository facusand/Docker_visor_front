import { Component, OnInit } from '@angular/core';
import { ClimaService } from './clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  climaData: any[] = []; // Almacena los datos del clima

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
    const ciudades = ['Corrientes', 'Resistencia', 'Buenos Aires', 'Santa Fe', 'Córdoba', 'Misiones']; // Agrega más ciudades según sea necesario
    ciudades.forEach((ciudad) => {
      this.getWeatherData(ciudad);
    });
  }

  getWeatherData(city: string): void {
    this.climaService.getCurrentWeather(city).subscribe(
      (data) => {
        this.climaData.push(data); // Almacena la respuesta en el array
      },
      (error) => {
        console.error('Error al obtener los datos del clima:', error);
      }
    );
  }

}
