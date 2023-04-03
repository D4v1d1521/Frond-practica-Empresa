import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Area } from '../Interface/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private endPoint: string = environment.endPoint;
  private apiUrl: string = this.endPoint + "areas/";

  constructor(private http: HttpClient) { }

  getList(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.apiUrl}getAll`);
  }

}
