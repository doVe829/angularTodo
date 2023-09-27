import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todoInterface';
import { TodoData } from '../mockTodoData';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  public todos = new BehaviorSubject<Todo[]>(TodoData);

  addTodo(todo: Todo): void {
    this.todos.next([...this.todos.getValue(), ...[todo]]);
  }

  removeTodo(id: string) {
    const filteredList = this.todos.getValue().filter((todo) => todo.id !== id);
    this.todos.next(filteredList);
  }

  generateToken() {
    const tokenVal = uuidv4().toString();
    localStorage.setItem('token', tokenVal);
  }

  removeToken() {
    localStorage.clear();
  }

  constructor() {}
}
