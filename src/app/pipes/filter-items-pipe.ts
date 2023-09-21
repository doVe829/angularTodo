import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todoInterface';

@Pipe({ name: 'filterImportant', pure: false })
export class FilterItemsPipe implements PipeTransform {
  transform(items: Todo[], filterVal: boolean): Todo[] {
    return items.filter((item) => !!item.important === filterVal);
  }
}
