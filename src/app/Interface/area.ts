import { User } from './user';
import { EState } from './eState';
export interface Area {

    idArea:number,
    codeArea:number,
    nameArea:string,
    state:EState,
    leaderArea:User
}
