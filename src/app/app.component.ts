import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { TasklistComponent } from "./components/task/tasklist/tasklist.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = "";
  numero : number = Math.trunc((Math.random()*1000)+100);
  imagenAleatoria : string = `https://picsum.photos/200/300?random=${this.numero}`;
  

  muestraImagen(){
    let randomNumber:number = Math.trunc((Math.random()*1000)+100);
    this.imagenAleatoria = `https://picsum.photos/200/300?random=${randomNumber}`;
  }

}
