import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todoInterface';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private sharedService: SharedDataService,
    public router: Router
  ) {}
  headerTitle: string = 'NG Todo';
  defaultTodo: Todo = {
    id: uuidv4(),
    name: '',
    description: '',
    done: false,
  };

  addTodo() {
    this.sharedService.addTodo(this.defaultTodo);
  }
}
