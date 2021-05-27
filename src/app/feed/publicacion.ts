import { Profile } from "../profile";

export class Publicacion {
    constructor(public perfil:Profile,public url:string,public lugar:string, public likes:number, public descripcion:string, public tiempo:number){}
}
