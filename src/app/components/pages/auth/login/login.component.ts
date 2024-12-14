import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPasswordValidator } from './login.validator'; 
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../footer/footer.component';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginFormComponent {
  
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private authService : AuthService, private router : Router) {
    this.formLogin = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, customPasswordValidator()]]
    });
  }
 
  onSubmit() {
    this.authService.login(this.formLogin.value)
    .then (response => {
      console.log(response)
      this.router.navigate(['/home']);
    })
    .catch (error => console.log(error))
  }

  onClick(){
    this.authService.loginGoogle()
    .then (response => {
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch (error => console.log(error))
  }


}
