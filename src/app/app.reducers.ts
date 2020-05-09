import { Todo } from "./todo/model/todo.model";
import { ActionReducerMap } from "@ngrx/store";

import * as fromTodo from "./todo/todo.reducer";
import * as fromFiltro from "./filter/filter.reducer";

import * as fromFiltroActions from "./filter/filter.actions";

/* Unificando todos los reducers de la aplicación */
// Para TODO
export interface AppState {
  todos: Todo[];
  filtro: fromFiltroActions.filtrosValidos;
}

// Para Filtros
export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filterReducer,
};
