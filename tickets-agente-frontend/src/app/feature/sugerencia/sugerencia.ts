import { Rol } from "../rol/rol"

export interface Sugerencia{
  sugerenciaId: number,
  motivoId: number,
  sugerenci: string,
  created: Date,
  updated: Date,
  enable: boolean,
  roles: Rol[],
  motivoNombre: string
}
