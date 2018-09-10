import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TODOS} from '../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = TODOS;
  todosDone = TODOS.filter(todo => todo.done);
  todosPending = TODOS.filter(todo => !todo.done);

  selectedTodo: Todo;

  constructor() { }

  ngOnInit() {
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}
