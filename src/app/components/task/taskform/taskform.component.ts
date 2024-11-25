import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {
  formTaskEdit : FormGroup;

  constructor(formBuilder: FormBuilder){
    this.formTaskEdit = formBuilder.group({
      'name' : ['',[Validators.required]],
      'description' : ['',[Validators.required]],
      'priority': ['', [Validators.required]],
      'expirationDate' : ['',[Validators.required]]
    });
  }

  onSubmit() : void {
    this.formTaskEdit.value;
    this.formTaskEdit.get("name")?.value;
    if (this.formTaskEdit.valid){
      console.log();
    } else{
      console.log(`El fornulario tiene errores: ${this.formTaskEdit.get('name')?.errors}`)
    }
  }

}
