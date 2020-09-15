import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo.models';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  faTrashAlt = faTrashAlt;
  faCheck = faCheck;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onToggle(todo) {
    //Toggle in UI
    todo.completed = !todo.completed;

    //Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe((todo) => {
      console.log(todo);
    });
  }
  onDelete(todo) {
    console.log('todo Deleted');
  }

  setClasses() {
    let classes = {
      isChecked: this.todo.completed,
    };
    return classes;
  }
}
