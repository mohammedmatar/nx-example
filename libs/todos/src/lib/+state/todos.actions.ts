import { createAction, props } from '@ngrx/store';
import { TodosEntity } from './todos.models';

export const loadTodos = createAction('[Todos Page] Init');

export const loadTodosSuccess = createAction(
  '[Todos/API] Load Todos Success',
  props<{ todos: TodosEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos/API] Load Todos Failure',
  props<{ error: any }>()
);

export const getTodo = createAction('[Todos Page] Get Todo', props<{ todo: TodosEntity }>());
export const getTodoSuccess = createAction('[Todos Page] Get Todo Success', props<{ todo: TodosEntity }>());
export const getTodoFailure = createAction('[Todos Page] Get Todo Failure', props<{ error: any }>());

export const updateTodo = createAction('[Todos Page] Update Todo', props<{ todo: TodosEntity }>());
export const updateTodoSuccess = createAction('[Todos Page] Update Todo Success', props<{ todo: TodosEntity }>());
export const updateTodoFailure = createAction('[Todos Page] Update Todo Failure', props<{ error: any }>());

export const logTodo = createAction('[Todos Page] Log Todo', props<{ todo: TodosEntity }>());
