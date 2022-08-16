import { Motivo } from "../motivo/motivo";

export interface Modulo {
    moduloId: number,
    name: string,
    url: string,
    created: Date,
    updated: Date,
    enabled: boolean,
    rolId: number,
    motivos: Motivo []
}
