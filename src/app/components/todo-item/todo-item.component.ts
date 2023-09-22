import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Editables } from 'src/app/editables';
import { Todo } from 'src/app/models/todoInterface';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements Editables {
  title: boolean;
  description: boolean;

  constructor(private sharedService: SharedDataService) {
    this.title = false;
    this.description = false;
  }
  @Input() content!: Todo;
  @ViewChild('refContentDescr') descriptionInput!: ElementRef<HTMLInputElement>;
  @ViewChild('refContentTitle') titleInput!: ElementRef<HTMLInputElement>;
  editable: boolean = false;

  deleteItem(id: string) {
    this.sharedService.removeTodo(id);
  }
  makeEditable(key: string) {
    switch (key) {
      case 'desc':
        this.description = true;
        setTimeout(() => this.descriptionInput.nativeElement.focus());
        break;
      case 'title':
        this.title = true;
        setTimeout(() => this.titleInput.nativeElement.focus());
        break;
    }
  }
  onBlur() {
    this.description = false;
  }
}
