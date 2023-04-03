
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environments';
import {Observable} from 'rxjs';

import { Area } from './../Interface/area';
import { User } from './../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private endPoint:string = environment.endPoint;

  private apiUrlUsers:string = this.endPoint + "user/";

  private apiUrlAreas:string = this.endPoint + "areas/";

  constructor(private http:HttpClient) { }

  //USERS
  
  
  //FILTROS
  getAllEmployes():Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}total-empleados`);
  }


  getAllEmployesActives():Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}empleados-activos`);
  }

  getAllEmployesInactives():Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}empleados-inactivos`);
  }

  getAllEmployesByName(name:string):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}empleados-por-nombres/${name}`);
  }

  getAllEmployesByState(state:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}estado-area-usuario/${state}`);
  }

  getAllEmployesBySalary(salary:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}empleado-por-salario/${salary}`);
  }

  getAllEmployesByAge(age:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}usuario-por-edad/${age}`);
  }

  getAllEmployesByDocumentNumber(numberDocument:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}usuario-por-numeroDocumento/${numberDocument}`);
  }

  //AREAS


  getAllAreas():Observable<number>{
    return this.http.get<number>(`${this.apiUrlAreas}cantidad-areas`);
  }

  getAllAreasInactives():Observable<number>{
    return this.http.get<number>(`${this.apiUrlAreas}areas-inactivas`);
  }

  getAllAreasActives():Observable<number>{
    return this.http.get<number>(`${this.apiUrlAreas}areas-activas`);
  }


  getAllAreasByName(name:string):Observable<number>{
    return this.http.get<number>(`${this.apiUrlAreas}areas-por-nombre/${name}`);
  }




}
