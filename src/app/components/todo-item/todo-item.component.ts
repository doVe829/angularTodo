import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todoInterface';
import { ButtonService } from 'src/app/services/button.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  constructor(private sharedService: SharedDataService) {}
  @Input() content!: Todo;
  editable: boolean = false;

  deleteItem(id: string) {
    this.sharedService.removeTodo(id);
  }
}
