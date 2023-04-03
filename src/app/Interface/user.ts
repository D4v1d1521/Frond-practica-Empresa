import { EState } from './eState';
import { ERol } from './eRol';

export interface User {
    idUser:number,
    name:string,
    lastName:string,
    birthDate:Date,
    email:string,
    password:string,
    documentNumber:number,
    salary:number,
    position:string,
    roles:ERol,
    state:EState
}
