import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPasswordValidator } from './singin.validator';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

    formSingin : FormGroup;

    constructor (private fb : FormBuilder){
      this.formSingin = this.fb.group ({
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required, customPasswordValidator()]]
      })
    }

    onSubmit() {
      if (this.formSingin.valid) {
        console.log('Formulario válido:', this.formSingin.value);
      } else {
        console.log('Formulario inválido:', this.formSingin.errors);
      }
    }
}
