import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
