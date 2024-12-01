import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { customDateExpiration,customPriority } from './taskform.validator';
import { Task,TaskStatus } from '../../../../models/task.model';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent implements OnChanges, OnInit{

  @Input()
  taskToEdit: Task | null = null; // Tarea a editar (null si estamos añadiendo)
  @Output()
  saveTask = new EventEmitter<Task>(); // Emitir tarea editada
  @Output()
  newTask = new EventEmitter<Task>(); // Emitir nueva tarea

  formTaskEdit: FormGroup

  constructor(private route: ActivatedRoute, formBuilder: FormBuilder) {
    this.formTaskEdit = formBuilder.group({
      'name': ['', [Validators.required, Validators.maxLength(50)]],
      'description': ['', [Validators.required, Validators.maxLength(255)]],
      'priority': ['', [Validators.required, customPriority()]],
      'expirationDate': ['', [Validators.required, customDateExpiration()]],

    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
        let id = params.get('id');
        console.log(id);
    });
  }

  onSubmit() {
    if (this.formTaskEdit.valid) {
      if (this.taskToEdit) {
        // Editar tarea existente
        const updatedTask: Task = {
          ...this.taskToEdit, // Mantén los valores de la tarea existente
          ...this.formTaskEdit.value, // Sobrescribe los valores con los del formulario
          expirationDate: new Date(this.formTaskEdit.value.expirationDate), // Actualiza la fecha de expiración
        };
        this.saveTask.emit(updatedTask); // Emitir tarea editada
      } else {
        // Añadir nueva tarea
        const newTask: Task = new Task(
          Math.floor(Math.random() * 1000000), // ID aleatorio
          this.formTaskEdit.value.name,
          this.formTaskEdit.value.description,
          this.formTaskEdit.value.priority,
          TaskStatus.PENDING,
          new Date(this.formTaskEdit.value.expirationDate),
          new Date(), // Fecha de creación
          false
        );
        this.newTask.emit(newTask); // Emitir nueva tarea
      }
  
      this.formTaskEdit.reset(); // Limpiar el formulario
    } else {
      console.log('Formulario inválido', this.formTaskEdit.errors);
    }
  }
    
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskToEdit'] && this.taskToEdit) {
      // Cargar los valores de la tarea en el formulario
      this.formTaskEdit.patchValue({
        name: this.taskToEdit.name,
        description: this.taskToEdit.description,
        priority: this.taskToEdit.priority,
        expirationDate: this.taskToEdit.expirationDate.toISOString().slice(0, 16),
      });
    } else {
      // Limpiar el formulario si no hay tarea en edición
      this.formTaskEdit.reset();
    }
  }

}