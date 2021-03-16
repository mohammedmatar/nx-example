import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { navigation } from '@nrwl/angular';
import * as TodosActions from './todos.actions';
import { TodosDsService } from '../infrastructure/todos-ds.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { OneTodoComponent } from '../containers/one-todo/one-todo.component';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class TodosEffects {
  logTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.logTodo),
    tap(
      ({ todo }) => console.log(`%c logged based on router navigation ${JSON.stringify(todo)}`, 'background-color: indianred;color: white'))
  ), { dispatch: false });

  getTodo$ = createEffect(() =>
    this.actions$.pipe(
      navigation(OneTodoComponent, {
        run: (r: ActivatedRouteSnapshot) => {
          return this.backend
            .get(r.params['id'])
            .pipe(
              tap((todo) => {
                console.log(`%c your todo is: ${JSON.stringify(todo)}`, 'background-color:olive;color:white');
              }),
              switchMap((todo) => [
                TodosActions.getTodoSuccess({ todo }),
                TodosActions.logTodo({ todo })
              ])
            );
        },

        onError: (r: ActivatedRouteSnapshot, error) => {
          console.error('Error', error);
          throw error;
        }
      })
    )
  );
  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.updateTodo),
      switchMap(({ todo }) => this.backend.udpate(todo).pipe(map(resp => TodosActions.updateTodoSuccess({ todo: resp }))))
    )
  );

  constructor(
    private actions$: Actions,
    private backend: TodosDsService
  ) {
  }
}
