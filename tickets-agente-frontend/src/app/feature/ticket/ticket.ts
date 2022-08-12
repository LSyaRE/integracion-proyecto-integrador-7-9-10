import { Respuesta } from "../respuesta/respuesta"

export interface Ticket {
    id:number,
    enabled: boolean,
    updated: Date,
    description:string,
    jornada:string,
    carreraId:number,
    respuestas: Respuesta[],
    ticketId:number
}