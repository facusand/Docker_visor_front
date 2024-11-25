import { Component, OnInit } from '@angular/core';
import { ICamara } from '../models/ICamara';
import { CamarasService } from './camaras.service';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.css']
})
export class CamarasComponent implements OnInit {
  camaras: ICamara[] = [];

  constructor(private camarasService: CamarasService) {}

  ngOnInit(): void {
    this.camarasService.getCamaras().subscribe(
      (data: ICamara[]) => {
        this.camaras = data;
      },
      (error) => {
        console.error('Error al obtener las cámaras:', error);
      }
    );
    console.log("Hola", this.camaras);
  }
}
