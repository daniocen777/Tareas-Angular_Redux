import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { Todo } from "../model/todo.model";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtro: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }
}
