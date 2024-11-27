import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customDateExpiration, customPriority} from './taskform.validator';
import { Task, TaskPriority, TaskStatus } from '../../../../models/task.model';
import { TaskEvent } from '../../../../models/taskevent.model';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {
  
  formTaskEdit : FormGroup;
  @Input()
  taskInput : Task = new Task (1, "Implementacion de la autenticacion", "Configuracion de autenticacion de usuarios", TaskPriority.HIGH, TaskStatus.COMPLETED,new Date ("2024-09-12"),new Date ("2024-09-14"),false);

  @Output()
  evenTaskModify = new EventEmitter<TaskEvent>();


  constructor(formBuilder: FormBuilder){
    this.formTaskEdit = formBuilder.group({
      'name' : ['',[Validators.required, Validators.maxLength(20)]],
      'description' : ['',[Validators.maxLength(250)]],
      'priority': ['', [Validators.required, customPriority()]],
      'expirationDate' : ['',[Validators.required, customDateExpiration()]]
    });
  }

  onSubmit() : void {
    //this.formTaskEdit.value;
    //this.formTaskEdit.get("name")?.value;
    /*En caso de que lo introducido en el formulario sea valido, crearemos una tarea con sus valores*/
    if (this.formTaskEdit.valid){
      let tarea : Task = new Task (
        Math.floor(Math.random () * 1000),
        this.formTaskEdit.value.name,
        this.formTaskEdit.value.description,
        this.formTaskEdit.value.priority,
        TaskStatus.PENDING,
        new Date(),
        new Date (this.formTaskEdit.value.expirationDate),
        false
      );
      this.evenTaskModify.emit (new TaskEvent ("editTask",tarea))
    }
  }


  

}
