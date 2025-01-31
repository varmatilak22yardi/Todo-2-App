import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo:Todo={title: '',completed:false};
  @Output() remove: EventEmitter<void>=new EventEmitter<void>();

  onRemove(){
    this.remove.emit();
  }
}
