import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { TaskformComponent } from "../taskform/taskform.component";
import { ResumeComponent} from "../taskresume/taskresume.component";
import { TaskService } from "../../../services/task.service";
import { Task } from "../../../../models/task.model";
import { TaskEvent } from "../../../../models/taskevent.model";

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, TaskformComponent, ResumeComponent],
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  taskList: Task[] = [];
  taskToEdit: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }

  newTask(task: Task): void {
    this.taskService.addTask(task);
    this.taskList = this.taskService.getTasks(); 
  }

  saveTask(updateTask: Task): void {
    this.taskService.updateTask(updateTask);
    this.taskList = this.taskService.getTasks(); 
    this.taskToEdit = null;
  }

  setTaskToEdit(task: Task): void {
    this.taskToEdit = task;
  }

  modifyTask(taskEvent: TaskEvent): void {
    this.taskService.modifyTask(taskEvent);
    this.taskList = this.taskService.getTasks(); 
  }
}
