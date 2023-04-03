import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as moment from 'moment'; 
import { User } from 'src/app/Interface/user';
import { UserService } from 'src/app/Service/user.service';


@Component({
  selector: 'app-DialogAddEdit',
  templateUrl: './DialogAddEditUser.component.html',
  styleUrls: ['./DialogAddEditUser.component.css']
})

export class DialogAddEditUserComponent implements OnInit {

  /* name!:string; */
  formUser: FormGroup;
  tituloAccion: string = "Nuevo";
  botonAccion: string = "Guardar";
  listaUsuarios: User[] = [];

  //Constructor
  constructor(
    private dialogoReferencia: MatDialogRef<DialogAddEditUserComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public dataUser: User
  ){

    this.formUser = this.fb.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      birthDate:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      documentNumber:['',Validators.required],
      salary:['',Validators.required],
      position:['',Validators.required],
      roles:['',Validators.required],
      state:['',Validators.required],
    }); 

    this.userService.getList().subscribe({
      next:(dataResponse)=>{
        this.listaUsuarios = dataResponse;
      },
      error:(e)=>{}
    })  
  }

  mostrarAlerta(msg: string, accion: string) {
    this.snackBar.open(msg, accion, {
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }

  //addEditUser
  addEditUser(){
    
    console.log(this.formUser.value);

    const modelo: User={
      idUser: 0,
      name: this.formUser.value.name,
      lastName: this.formUser.value.lastName,
      birthDate: this.formUser.value.birthDate,
      email: this.formUser.value.email,
      password: this.formUser.value.password,
      documentNumber: this.formUser.value.documentNumber,
      salary: this.formUser.value.salary,
      position: this.formUser.value.position,
      roles: this.formUser.value.roles,
      state: this.formUser.value.state
    }

    if (this.dataUser == null) {
      this.userService.add(modelo).subscribe({
        next:(data)=>{
          this.mostrarAlerta("Usuario creado","listo");
          this.dialogoReferencia.close("creado");
        },error:(e)=>{
          this.mostrarAlerta("No se pudo crear","error");
        }
      });  
    }else{
      this.userService.update(this.dataUser.idUser,modelo).subscribe({
        next:(data)=>{
          console.log(this.dataUser.idUser);
          this.mostrarAlerta("Usuario editado","listo");
          this.dialogoReferencia.close("editado");
        },error:(e)=>{
          this.mostrarAlerta("No se pudo editar","error");
        }
      });
    }
  }

  //ngOnInit
  ngOnInit() :void {
    if (this.dataUser) {
      this.formUser.patchValue({
        
        idUser: this.dataUser.idUser,
        name: this.dataUser.name,
        lastName: this.dataUser.lastName,
        birthDate: this.dataUser.birthDate,
        email: this.dataUser.email,
        password: this.dataUser.password,
        documentNumber: this.dataUser.documentNumber,
        salary: this.dataUser.salary,
        position: this.dataUser.position,
        roles: this.dataUser.roles,
        state: this.dataUser.state,
      });
      
      this.tituloAccion = "Editar";
      this.botonAccion = "Actualizar";
    }
  }
}
