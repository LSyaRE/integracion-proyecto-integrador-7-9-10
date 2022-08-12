import { Ticket } from "../ticket/ticket";

export interface Usuario {
  id: number,
  nombre: string,
  correo: string,
  password: string,
  enabled: boolean,
  carreraId: number,
  usrtickets: Ticket[],
  usuarioId: number,
  
}
