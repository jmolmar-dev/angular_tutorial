import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { TasklistComponent } from "../../task/tasklist/tasklist.component";
import { CommonModule } from '@angular/common';
import { TaskformComponent } from "../../task/taskform/taskform.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NavbarComponent, TasklistComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
