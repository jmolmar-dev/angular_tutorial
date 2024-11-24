import { Component , OnInit} from '@angular/core';
import {Task, TaskPriority,TaskStatus} from '../../../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})

export class TasklistComponent implements OnInit {

    taskList : Task [] = [];
    
      ngOnInit(): void {
       this.taskList = [
          new Task (1, "Implementacion de la autenticacion", "Configuracion de autenticacion de usuarios", TaskPriority.HIGH, TaskStatus.COMPLETED,new Date ("2024-09-12"),new Date ("2024-09-14"),false),
          new Task (2, "Diseño de la interfaz de usuario", "Crear un diseño para la interfaz principal", TaskPriority.LOW, TaskStatus.IN_PROGRESS, new Date ("2024-10-02"), new Date ("2024-10-05"),false),
          new Task (3, "Desarrollo de la API", "Implementacion de API REST para los datos de la aplicacion", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date ("2024-11-03"), new Date ("2024-11-05"),false),
          new Task (4, "Actualizacion de la documentacion", "Revision y Actualizacion de la Documentacion", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date ("2024-07-22"), new Date ("2024-07-25"),true),
          new Task (5, "Creacion de pruebas unitarias", "Escribir pruebas unitarias para la API", TaskPriority.MEDIUM, TaskStatus.IN_PROGRESS, new Date ("2024-09-23"), new Date ("2024-11-07"),true),
          new Task (6, "Configuracion CI/CD", "Configuracion de la Integracion y el despliegue continuo", TaskPriority.LOW, TaskStatus.COMPLETED, new Date ("2024-08-10"), new Date ("2024-08-28"),true),
          new Task (7, "Optimización del Rendimiento", "Mejora del rendimiento dentro de la aplicacion", TaskPriority.HIGH, TaskStatus.PENDING, new Date ("2024-10-23"), new Date ("2024-11-15"),false),
          new Task (8, "Realización de pruebas de carga", "Ejecución de las Pruebas de carga en la API", TaskPriority.LOW, TaskStatus.IN_PROGRESS, new Date ("2024-10-01"), new Date ("2024-12-01"),true),
          new Task (9, "Configuracion de las notificaciones", "Realizacion del Despliegue de la Aplicacion", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date ("2024-11-10"), new Date ("2024-11-30"),false),
          new Task (10, "Despliegue en Produccion", "Realizacion del despliegue de la aplicacion", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date ("2024-09-23"), new Date ("2024-11-17"),true)
        ];
        
      }

      deleteTask (task:Task){
        task.isDelete = true;
      }

      incrementPriority (task:Task){
        if (task.priority == TaskPriority.LOW){
          task.priority = TaskPriority.MEDIUM;
        }else if (task.priority == TaskPriority.MEDIUM){
          task.priority = TaskPriority.HIGH;
        }
      }

      reducePriority (task:Task){
        if (task.priority == TaskPriority.HIGH){
          task.priority = TaskPriority.MEDIUM;
        }else if (task.priority == TaskPriority.MEDIUM){
          task.priority = TaskPriority.LOW;
        }
      }

      incrementStatus (task:Task){
        if (task.status == TaskStatus.PENDING){
          task.status = TaskStatus.IN_PROGRESS;
        }else if (task.status == TaskStatus.IN_PROGRESS){
          task.status = TaskStatus.COMPLETED;
        }
      }

      editTask(task : Task){
        console.log("La tarea se esta editando");
      }
      

}
