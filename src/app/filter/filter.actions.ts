import { Action } from "@ngrx/store";

export const SET_FILTRO = "[fILTER] SET FILTRO";
// Palabras aceptadas por el filtro
export type filtrosValidos = "todos" | "completados" | "pendientes";

export class SetFiltroAction implements Action {
  readonly type = SET_FILTRO;
  constructor(public filtro: filtrosValidos) {}
}

export type acciones = SetFiltroAction;
