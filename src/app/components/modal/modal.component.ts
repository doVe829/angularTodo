import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/models/todoInterface';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  closeResult = '';

  @Input() todoItem!: Todo;
  @Input() btnIcon?: string;
  @Input() saveFunction: boolean = false;
  @Input() modalHeader: string = 'Update Todo';
  @Input() showDone: boolean = false;
  constructor(
    private modalService: NgbModal,
    private sharedService: SharedDataService
  ) {}

  open(content: object) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  saveStuff() {
    if (this.saveFunction) {
      this.sharedService.addTodo(this.todoItem);
      const clearedTodo: Todo = {
        name: '',
        description: '',
        done: false,
        id: uuidv4(),
      };
      this.todoItem = { ...this.todoItem, ...clearedTodo };
    }
  }
}
