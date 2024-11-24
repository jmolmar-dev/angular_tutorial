import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskEvent } from '../../../../models/taskevent.model';


@Component({
  selector: 'app-taskresume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskresume.component.html',
  styleUrl: './taskresume.component.css'
})
export class TaskresumeComponent {
  
  @Input()
  taskInput : Task = new Task (1, "Implementacion de la autenticacion", "Configuracion de autenticacion de usuarios", TaskPriority.HIGH, TaskStatus.COMPLETED,new Date ("2024-09-12"),new Date ("2024-09-14"),false)
  
  @Output()
  evenTaskModify = new EventEmitter<TaskEvent>();


  deleteTask (task:Task){
    this.evenTaskModify.emit(new TaskEvent ("deleteTask", this.taskInput));
  }

  incrementPriority (task:Task){
    this.evenTaskModify.emit(new TaskEvent ("incrementPriority", this.taskInput));
  }

  reducePriority (task:Task){
    this.evenTaskModify.emit(new TaskEvent ("reducePriority", this.taskInput));
  }

  incrementStatus (task:Task){
    this.evenTaskModify.emit(new TaskEvent("incrementStatus", this.taskInput));
  }

  editTask(task : Task){
    this.evenTaskModify.emit(new TaskEvent("editTask", this.taskInput));
  }
}
