import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardService } from 'src/app/Service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['idProducto', 'Nombre', 'Descripcion', 'Fecha', 'Acciones'];
  
  totalEmpleados!:number;
  totalEmpleadosActivos!:number;
  totalEmpleadosInactivos!:number;

  totalAreas!:number;
  totalAreasActivas!:number;
  totalAreasInactivas!:number;

  totalEmpleadosNombre!:number;
  totalEstado!:number;
  totalEmpleadosSalario!:number
  totalEmpleadoNumberDocument!:number
  totalEmpleadosEdad!:number;

  totalNombreArea!:number;

  constructor(private dashBoardService:DashboardService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
    ){
    
  }

  /**
   * ejecuta este metodo al momento de inicializar el servidor
   */
  ngOnInit(): void {
    this.getAllEmployes();
    this.getAllEmployesActives();
    this.getAllEmployesInactives();
    this.getAllAreas();
    this.getAllAreasActives();
    this.getAllAreasInactives();
  }

  getAllEmployes(){
    this.dashBoardService.getAllEmployes().subscribe({
      next:(cantidad:number) =>{
        this.totalEmpleados = cantidad;
      },error:(e) =>{}
    })
  }

  getAllEmployesActives(){
    this.dashBoardService.getAllEmployesActives().subscribe({
      next:(cantidad:number) =>{
        this.totalEmpleadosActivos = cantidad;
      },error:(e) =>{}
    })
  }

  getAllEmployesInactives(){
    this.dashBoardService.getAllEmployesInactives().subscribe({
      next:(cantidad:number) =>{
        this.totalEmpleadosInactivos = cantidad;
      },error:(e) =>{}
    })
  }

  getAllEmployesByName(name:string){
    this.dashBoardService.getAllEmployesByName(name).subscribe({
      next:(cantidad:number) =>{
        this.totalEmpleadosNombre = cantidad;
      },error:(e) =>{}
    })
  }

  getAllAreas(){
    this.dashBoardService.getAllAreas().subscribe({
      next:(cantidad:number) =>{       
        this.totalAreas = cantidad;
      },error:(e) =>{}
    })
  }

  getAllAreasActives(){
    this.dashBoardService.getAllAreasActives().subscribe({
      next:(cantidad:number) =>{
        this.totalAreasActivas = cantidad;
      },error:(e) =>{}
    })
  }

  getAllAreasInactives(){
    this.dashBoardService.getAllAreasInactives().subscribe({
      next:(cantidad:number) =>{
        this.totalAreasInactivas = cantidad;
      },error:(e) =>{}
    })
  }

  getAllEmployesByState(state:number){
    this.dashBoardService.getAllEmployesByState(state).subscribe({
      next:(cantidad:number) =>{
        this.totalEstado = cantidad;
      },error:(e) =>{}
    })
  }

  getAllEmployesBySalary(salary:number){
    this.dashBoardService.getAllEmployesBySalary(salary).subscribe({
      next:(cantidad:number) =>{
        console.log("total salario " + cantidad);
        this.totalEmpleadosSalario = cantidad;
      },error:(e) =>{}
    })
  }

  getAllEmployesByAge(age:number){
    this.dashBoardService.getAllEmployesByAge(age).subscribe({
      next:(cantidad:number) =>{
        console.log("total edad " + cantidad);
        this.totalEmpleadosEdad = cantidad;
      },error:(e) =>{}
    })
  }

  getAllEmployesByDocumentNumber(numberDocument:number){
    this.dashBoardService.getAllEmployesByDocumentNumber(numberDocument).subscribe({
      next:(cantidad:number) =>{
        
        this.totalEmpleadoNumberDocument = cantidad;
      },error:(e) =>{}
    })
  }
  
  getAllAreasByName(name:string){
    this.dashBoardService.getAllAreasByName(name).subscribe({
      next:(cantidad:number) =>{
        console.log("total nombre area " + cantidad);
        this.totalNombreArea = cantidad;
      },error:(e) =>{}
    })
  }

  
}

