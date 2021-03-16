import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodos from './+state/todos.reducer';
import { TodosEffects } from './+state/todos.effects';
import { OneTodoComponent } from './containers/one-todo/one-todo.component';
export const todosRoutes: Route[] = [
  { path: ':id', component: OneTodoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(todosRoutes),
    StoreModule.forFeature(fromTodos.TODOS_FEATURE_KEY, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  declarations: [OneTodoComponent],
})
export class TodosModule {}
