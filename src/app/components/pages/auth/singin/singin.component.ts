import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPasswordValidator } from './singin.validator';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { FooterComponent } from "../../../footer/footer.component";
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { UserCredential } from '@angular/fire/auth';
import { Person, PersonRole } from '../../../../../models/person.model';
import { PersonService } from '../../../../services/person.service';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

  formSingin: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private personService: PersonService) {
    this.formSingin = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, customPasswordValidator()]],
      'name': ['', [Validators.required]],
      'surname': ['', [Validators.required]],
      'isAdmin': [false] /*Por defecto no es Administrador --> Si no seleccionamos el switch, se registrara a la persona como Usuario*/
    })
  }

  onSubmit() {
    if (this.formSingin.valid) {
      const name = this.formSingin.get('name')?.value;
      const surname = this.formSingin.get('surname')?.value;
      const email = this.formSingin.get('email')?.value;
      const password = this.formSingin.get('password')?.value;
      const isAdmin = this.formSingin.get('isAdmin')?.value;
      const role = isAdmin ? PersonRole.ADMIN : PersonRole.USER;

      this.authService.register({ email, password })
        .then((userCredential: UserCredential) => {
          const uid = userCredential.user.uid; /*Se obtiene el uid generado mediante Firebase*/
          const person: Person = {uid,name,surname,email,role,createAt: new Date().toString()};


          this.personService.savePerson(person)
            .then(() => {
              alert("Usuario Registrado Correctamente")
              this.router.navigate(['/login']);
            })
            .catch((error: any) => console.error('Error al guardar los datos del usuario:', error));
        })
        .catch(error => {
          console.error('Error en el registro:', error);
        });
    }
  }





}
