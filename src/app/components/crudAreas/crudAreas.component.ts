import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Area } from 'src/app/Interface/area';
import { AreaService } from 'src/app/Service/area.service';
import { DialogAddEditUserComponent } from '../DialogAddEditUser/DialogAddEditUser.component';

@Component({
  selector: 'app-crudAreas',
  templateUrl: './crudAreas.component.html',
  styleUrls: ['./crudAreas.component.css']
})
export class CrudAreasComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = [
    "idArea","codeArea", "nameArea", "state", "leaderArea"
  ];
  dataArea = new MatTableDataSource<Area>();

  constructor(
    private areaService:AreaService,
    public dialog:MatDialog,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.mostrarAreas();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  ngAfterViewInit() {
    this.dataArea.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataArea.filter = filterValue.trim().toLowerCase();
  }

  mostrarAreas(){
    this.areaService.getList().subscribe({
      next:(dataResponse) => {
        console.log(dataResponse);
        this.dataArea.data = dataResponse;
      },
      error:(e)=>{console.log(e);}
    });
  }

  dialogoNuevaArea() {
    /* this.dialog.open(DialogAddEditUserComponent,{
      disableClose:true,
      width:"350px"
    }).afterClosed().subscribe(resultado =>{
      if (resultado === "creado") {
        this.mostrarAreas();
      }
    }); */
    console.log("hola");
    
  }


}
