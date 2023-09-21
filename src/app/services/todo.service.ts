import { Injectable } from '@angular/core';
import { Todo } from '../models/todoInterface';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TodoData } from '../mockTodoData';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  subject = new BehaviorSubject(TodoData);

  getTodos(): Observable<Todo[]> {
    const todos = of(TodoData);
    return todos;
  }

  deleteTodo(id: string): Observable<Todo[]> {
    const filteredTodos = TodoData.filter((todo) => todo.id !== id);
    return of(filteredTodos);
  }
}
