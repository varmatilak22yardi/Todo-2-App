import { Component,Input,Output,EventEmitter} from '@angular/core';
import {Todo} from '../todo.model';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone:true,
  imports: [CommonModule,TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos:Todo[]=[];
  @Output() removeTodo: EventEmitter<Todo>=new EventEmitter<Todo>();

}
