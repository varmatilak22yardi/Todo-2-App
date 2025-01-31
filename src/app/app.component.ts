import { Component } from '@angular/core';
import {Todo} from './todo.model';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[TodoInputComponent,TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todos: Todo[]=[];

  constructor(){
    if (typeof window!=='undefined' && window.localStorage)
    {
    const storedTodos=localStorage.getItem('todos');
    if (storedTodos)
      this.todos=JSON.parse(storedTodos);
    }
  }

  onAddTodo(newTodo:Todo): void{
    this.todos.push(newTodo);
    this.saveTodos();
  }

  onRemoveTodo(todoRemove:Todo):void{
    this.todos=this.todos.filter(Todo=> Todo!==todoRemove);
    this.saveTodos();
  }
  saveTodos():void{
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
}
