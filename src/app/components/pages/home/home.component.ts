import { Component } from '@angular/core';
import { TasklistComponent } from "../../task/tasklist/tasklist.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from "../../footer/footer.component";
import { ProfileComponent } from "../../profile/profile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
