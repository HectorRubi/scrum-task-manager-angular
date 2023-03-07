import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from 'src/app/models/task.model';
import { TaskStatus } from 'src/app/utils/tasks';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.css']
})
export class TasksContainerComponent {
  @Input() title: TaskStatus = 'ready';
  @Input() taskList: Task[] = [];

  @Output() drop = new EventEmitter<CdkDragDrop<Task[]>>();

  onDrop(event: CdkDragDrop<Task[]>) {
    this.drop.emit(event);
  }
}
