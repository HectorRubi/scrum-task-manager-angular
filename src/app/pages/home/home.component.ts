import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ready: Task[] = [
    new Task('get to work', 'Lorem ipsum dolor sit amet'),
    new Task('pick up groceries', 'Lorem ipsum dolor sit amet'),
    new Task('go home', 'Lorem ipsum dolor sit amet'),
    new Task('fall asleep', 'Lorem ipsum dolor sit amet'),
  ];
  todo: Task[] = []
  progress: Task[] = [];
  done: Task[] = [
    new Task('get up', 'Lorem ipsum'),
    new Task('brush teeth', 'Lorem ipsum'),
    new Task('take a shower', 'Lorem ipsum'),
    new Task('check e-mail', 'Lorem ipsum'),
  ]

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
