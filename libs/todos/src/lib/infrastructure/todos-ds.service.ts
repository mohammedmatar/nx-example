import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodosEntity } from '../+state/todos.models';

@Injectable({
  providedIn: 'root'
})
export class TodosDsService {
  static readonly BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {
  }
  load(): Observable<Array<TodosEntity>> {
    return this.http.get<Array<TodosEntity>>(`${TodosDsService.BASE_URL}/todos`);
  }
  get(id: number | string): Observable<TodosEntity> {
    return this.http.get<TodosEntity>(`${TodosDsService.BASE_URL}/todos/${id}`);
  }
  create(todo: TodosEntity): Observable<TodosEntity> {
    return this.http.post<TodosEntity>(`${TodosDsService.BASE_URL}/todos/`, todo);
  }

  udpate(todo: TodosEntity): Observable<TodosEntity> {
    return this.http.put<TodosEntity>(`${TodosDsService.BASE_URL}/todos/${todo.id}`, todo);
  }

}
