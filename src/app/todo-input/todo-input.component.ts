import {Component,EventEmitter,Output} from '@angular/core';
import { Todo } from '../todo.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css'
})
export class TodoInputComponent {
  newTodoTitle:string="";
  @Output() addTodo:EventEmitter<Todo>=new EventEmitter<Todo>();

  onAddTodo(){
    if (this.newTodoTitle.trim() !==''){
      const newTodo:Todo={
        title:this.newTodoTitle,
        completed:false
      };
      this.addTodo.emit(newTodo);
      this.newTodoTitle='';
    }
  }

}
