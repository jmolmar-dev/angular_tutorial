import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/person.model';
import { PersonService } from '../../services/person.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  user: Person | null = null; 

  constructor(private personService: PersonService, private authService: AuthService  ) {

  }

  ngOnInit(): void {
    /*Obtenemos al usuario actual que se ha autenticado, y mediante su uid, mostraremos los datos de la persona respectiva*/
    const currentUser = this.authService.getCurrentUser();

    if (currentUser) {
      this.personService.getPersonByUid(currentUser.uid)
        /*Si existen datos de la persona, lo recogemos y los mostraremos de forma posterior en nuestra plantilla*/.
        then(snapshot => {
          if (snapshot.exists()) {
            this.user = snapshot.val() as Person;
          }
        })
        .catch(err => {
          console.error('Error al cargar los datos del usuario:', err);
        });
    }
  }
}
