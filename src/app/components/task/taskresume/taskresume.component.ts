import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskEvent } from '../../../../models/taskevent.model';

@Component({
  selector: 'app-taskresume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskresume.component.html',
  styleUrls: ['./taskresume.component.css']
})
export class ResumeComponent {
  @Input() task: Task = new Task(1, "Tarea 1", "Descripción Tarea 1", TaskPriority.LOW, TaskStatus.PENDING, new Date("11/1/2024"), new Date("11/18/2024"), false);
  @Output() eventTaskModify = new EventEmitter<TaskEvent>();
  @Output() editTask = new EventEmitter<Task>();

  incrementStatus(id : number) {
    this.eventTaskModify.emit(new TaskEvent("incrementStatus", this.task.id));
  }

  deleteTask(id : number) {
    this.eventTaskModify.emit(new TaskEvent("deleteTask", this.task.id));
  }

  reducePriority(id : number) {
    this.eventTaskModify.emit(new TaskEvent("reducePriority", this.task.id));
  }

  incrementPriority(id : number) {
    this.eventTaskModify.emit(new TaskEvent("incrementPriority", this.task.id));
  }

  onEditTask() {
    this.editTask.emit(this.task);
  }
}
