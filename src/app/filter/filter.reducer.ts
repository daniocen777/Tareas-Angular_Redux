import * as fromFiltro from "./filter.actions";
//import or declare state

export const initialState: fromFiltro.filtrosValidos = "todos";

export function filterReducer(
  state = initialState,
  action: fromFiltro.acciones
): fromFiltro.filtrosValidos {
  switch (action.type) {
    case fromFiltro.SET_FILTRO: {
      return action.filtro;
    }

    default:
      return state;
  }
}
