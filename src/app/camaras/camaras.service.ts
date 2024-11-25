import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICamara } from '../models/ICamara';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CamarasService {

  constructor(private http: HttpClient) {}

  getCamaras(): Observable<ICamara[]> {
    return this.http.get<ICamara[]>(`${API_URL}/api/Camara/camaras`);
  }
}