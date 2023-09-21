import { Injectable } from '@angular/core';
import { Todo } from '../models/todoInterface';
import { TodoData } from '../mockTodoData';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  constructor(private todoService: TodoService) {}
}
