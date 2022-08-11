import { Modulo } from "../modulo/modulo";

export interface Rol {
    rolId: number,
    name: string,
    admin: boolean,
    personaId: number,
    created: Date,
    updated: Date,
    modulos: Modulo[],
    personaNombre: string
} 