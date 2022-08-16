import { Usuario } from "../usuario/usuario";

export interface Respuesta {
    id:number,
    idTicket: number,
    comentario: string,
    created: Date,
    enabled: boolean,
    resuelto: boolean,
    respuestaId:number,
    usuarioId?:number,
    usuarios:Usuario[]

}