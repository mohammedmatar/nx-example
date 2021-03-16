import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosPartialState } from '../../+state/todos.reducer';
import { Observable } from 'rxjs';
import { TodosEntity } from '../../+state/todos.models';
import { getSelected } from '../../+state/todos.selectors';
import { updateTodo } from '../../+state/todos.actions';

@Component({
  selector: 'multiple-actions-example-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.scss']
})
export class OneTodoComponent implements OnInit {
  selectedTodo$: Observable<TodosEntity>;

  constructor(private todosStore: Store<TodosPartialState>) {
  }

  ngOnInit(): void {
    this.selectedTodo$ = this.todosStore.select(getSelected);
  }

  markAsCompleted($event: MouseEvent, todo: TodosEntity) {
    $event.preventDefault();
    this.todosStore.dispatch(updateTodo({ todo: {...todo, completed: !todo.completed} }));
  }
}
