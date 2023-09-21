import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todoInterface';
import { ButtonService } from 'src/app/services/button.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonIcon!: string;
}
