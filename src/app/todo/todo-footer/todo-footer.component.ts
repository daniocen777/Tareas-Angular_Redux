import { Component, OnInit } from "@angular/core";

import * as fromFiltro from "../../filter/filter.actions";
import * as fromTodo from "../todo.actions";

import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { Todo } from "../model/todo.model";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styleUrls: ["./todo-footer.component.css"],
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFiltro.filtrosValidos[] = [
    "todos",
    "completados",
    "pendientes",
  ];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe((state) => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const action = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(action);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter((todo) => !todo.completado).length;
  }

  borrarAllTodo() {
    const action = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch(action);
  }
}
