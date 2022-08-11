import { Sugerencia } from "../sugerencia/sugerencia";

export interface Motivo {
    motivoId: number,
    descripcion: string,
    created: Date,
    enabled: boolean,
    archived: boolean,
    moduloId: number,
    sugerencias: Sugerencia[],
    moduloNombre: string
}
