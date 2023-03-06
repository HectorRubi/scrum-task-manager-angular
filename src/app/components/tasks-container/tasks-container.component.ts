import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/models/task.model';
import { TaskStatus } from 'src/app/utils/tasks';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.css']
})
export class TasksContainerComponent implements OnInit {
  @Input() title: TaskStatus = 'ready';
  taskList: Task[] = [];

  ngOnInit() {
    this.taskList.push(new Task('Task 1', 'Lorem ipsum dolor sit amet'));
    this.taskList.push(new Task('Task 2', 'Lorem ipsum dolor sit amet'));
    this.taskList.push(new Task('Task 3', 'Lorem ipsum dolor sit amet'));
    this.taskList.push(new Task('Task 4', 'Lorem ipsum dolor sit amet'));
  }
}
