import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../Interface/user';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../Service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { DialogAddEditUserComponent } from '../DialogAddEditUser/DialogAddEditUser.component';

@Component({
  selector: 'app-crudUsers',
  templateUrl: './crudUsers.component.html',
  styleUrls: ['./crudUsers.component.css']
})
export class CrudUsersComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = [
    "idUser","name","lastName", "birthDate", "email",
    "password","documentNumber","salary","position",
    "roles","state"
  ];
  dataSource = new MatTableDataSource<User>();
  
  constructor(
    private userService:UserService,
    public dialog:MatDialog,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.mostrarEmpleados();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarEmpleados(){
    this.userService.getList().subscribe({
      next:(dataResponse) => {
        console.log(dataResponse);
        this.dataSource.data = dataResponse;
      },
      error:(e)=>{console.log(e);}
    });
  }

  dialogoNuevoEmpleado() {
    this.dialog.open(DialogAddEditUserComponent,{
      disableClose:true,
      width:"1000px"
    }).afterClosed().subscribe(resultado =>{
      if (resultado === "creado") {
        this.mostrarEmpleados();
      }
    });
  }

}
