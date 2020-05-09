import { Component, OnInit } from "@angular/core";
import { ToggleAllTodoAction } from "./todo.actions";
import { AppState } from "../app.reducers";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  toggleAll() {
    this.completado = !this.completado;
    const action = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(action);
  }
}
