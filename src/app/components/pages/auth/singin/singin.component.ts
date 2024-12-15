import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPasswordValidator } from './singin.validator';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { FooterComponent } from "../../../footer/footer.component";
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

    formSingin : FormGroup;

    constructor (private fb : FormBuilder, private authService : AuthService, private router : Router){
      this.formSingin = this.fb.group ({
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required, customPasswordValidator()]]
      })
    }

    onSubmit() {
      this.authService.register(this.formSingin.value)
      .then (response => {
        console.log(response)
        this.router.navigate(['/login']);
      })
      .catch (error => console.log(error))
    }
}
