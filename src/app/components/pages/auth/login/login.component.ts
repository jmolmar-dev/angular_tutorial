import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPasswordValidator } from './login.validator'; 
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../footer/footer.component';
import { NavbarComponent } from '../../../navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginFormComponent {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, customPasswordValidator()]]
    });
  }
 
  onSubmit() {
    if (this.formLogin.valid) {
      console.log('Formulario válido:', this.formLogin.value);
    } else {
      console.log('Formulario inválido:', this.formLogin.errors);
    }
  }
}
