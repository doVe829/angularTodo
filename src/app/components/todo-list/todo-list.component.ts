import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todoInterface';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  items: Todo[] = [];
  filterItems = true;
  constructor(private sharedService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedService.todos.subscribe((todos) => (this.items = todos));
  }
}
